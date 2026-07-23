#Noesis Python model import+export test module, imports/exports some data from/to a made-up format

from inc_noesis import *

import noesis

#rapi methods should only be used during handler callbacks
import rapi

#registerNoesisTypes is called by Noesis to allow the script to register formats.
#Do not implement this function in script files unless you want them to be dedicated format modules!
def registerNoesisTypes():
	handle = noesis.register("XPR2 Textures", ".xpc")
	noesis.setHandlerTypeCheck(handle, XPRCheckType)
	noesis.setHandlerLoadRGBA(handle, XPRLoadRGBA)
	noesis.logPopup()
	#print("The log can be useful for catching debug prints from preview loads.\nBut don't leave it on when you release your script, or it will probably annoy people.")
	return 1
#check if it's this type based on the data
def XPRCheckType(data):
	bs = NoeBitStream(data)
	Header = bs.readBytes(4).decode("ASCII")
	if Header != 'XPR2':
		return 0
	return 1
texList = []
def XPRLoadRGBA(data, texList):
	bs = NoeBitStream(data)
	Header = bs.read(">iiii")
	Tex = []
	TexNames = []
	TexData = []
	TexSize = []
	for i in range(0, Header[3]):
		Data = bs.read(">iiii")
		Tex.append([Data[1], Data[2], Data[3], Data[0]])
	for i in range(0, Header[3]):
		bs.seek(Tex[i][2] + 12, NOESEEK_ABS)
		TexNames.append(searchString(bs))
		print(TexNames[-1])
	for i in range(0, Header[3]):
		bs.seek(Tex[i][0] + 12, NOESEEK_ABS)
		bs.seek(Tex[i][1] - 19, NOESEEK_REL)#33
		Data = bs.read(">HBHHiii")
		TexData.append([Data[0], Data[1], Data[2], Data[3]])
	for i in range(0, Header[3] - 1):
		TexSize.append((TexData[i + 1][0] - TexData[i][0]))
	TexSize.append(Header[2] / 0x100 - TexData[Header[3] - 1][0])
	for i in range(0, Header[3]):
		if Tex[i][3] == 1415066180:
			bs.seek(TexData[i][0] * 0x100 + (Header[1] + 12), NOESEEK_ABS)
			data = bs.readBytes(int(TexSize[i] * 0x100))
			imgHeight = (TexData[i][2] + 1) * 8
			imgWidth  = (TexData[i][3] + 1) & 0x1FFF
			texFmt = 0
			print(TexNames[i])
			#DXT1
			if TexData[i][1] == 0x52:
				data = rapi.imageUntile360DXT(rapi.swapEndianArray(data, 2), imgWidth, imgHeight, 8)
				texFmt = noesis.NOESISTEX_DXT1
			#DXT3
			elif TexData[i][1] == 0x53:
				data = rapi.imageUntile360DXT(rapi.swapEndianArray(data, 2), imgWidth, imgHeight, 16)
				texFmt = noesis.NOESISTEX_DXT3
			#DXT5
			elif TexData[i][1] == 0x54:
				data = rapi.imageUntile360DXT(rapi.swapEndianArray(data, 2), imgWidth, imgHeight, 16)
				texFmt = noesis.NOESISTEX_DXT5
			#DXT5 packed normal map
			elif TexData[i][1] == 0x71:
				data = rapi.imageUntile360DXT(rapi.swapEndianArray(data, 2), imgWidth, imgHeight, 16)
				data = rapi.imageDecodeDXT(data, imgWidth, imgHeight, noesis.FOURCC_ATI2)
				texFmt = noesis.NOESISTEX_RGBA32
			#DXT1 packed normal map
			elif TexData[i][1] == 0x7C:
				data = rapi.imageUntile360DXT(rapi.swapEndianArray(data, 2), imgWidth, imgHeight, 8)
				data = rapi.imageDecodeDXT(data, imgWidth, imgHeight, noesis.FOURCC_DXT1NORMAL)
				texFmt = noesis.NOESISTEX_RGBA32
			#raw
			elif TexData[i][1] == 0x86:
				data = rapi.imageUntile360Raw(data, imgWidth, imgHeight, 4)
				data = rapi.imageDecodeRaw(data, imgWidth, imgHeight, "a8r8g8b8")
				texFmt = noesis.NOESISTEX_RGBA32
			#unknown, not handled
			else:
				print("WARNING: Unhandled image format " + repr(imgFmt) + " - " + repr(imgWidth) + "x" + repr(imgHeight) + " - " + repr(len(data)))
				return None
			tex1 = NoeTexture(TexNames[i], imgWidth, imgHeight, data, texFmt)
			texList.append(tex1)
	return 1

def searchString(bs):
	bytes = []
	byte = None
	while byte != 0:
		byte = bs.readUByte()
		bytes.append(byte)
	return noeAsciiFromBytes(bytes)