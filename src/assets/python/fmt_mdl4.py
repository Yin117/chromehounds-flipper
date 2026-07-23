#by Durik256
from inc_noesis import *

def registerNoesisTypes():
    handle = noesis.register("chromehounds", ".mdl")
    noesis.setHandlerTypeCheck(handle, CheckType)
    noesis.setHandlerLoadModel(handle, LoadModel)
    return 1

def CheckType(data):
    if data[:4] != b'MDL4':
        return 0
    return 1

def LoadModel(data, mdlList):
    bs = NoeBitStream(data, 1)
    ctx = rapi.rpgCreateContext()
    texList, materials = [], []
    
    
    #Load TEXTURES
    try:
        loadTextures(texList)
    except:
        print('Error load xpr!')
    
    bs.seek(8)#MDL4,ver
    #dataOfs,fsize?,unknum?,matnum,bonenum,submeshnum
    h = [bs.readInt() for x in range(7)]
    print(h)
    
    bs.seek(92,1)#unkBlock
    
    bs.seek(h[2]*48,1)#skip unk?
    
    #bs.seek(h[3]*2112,1)#skip mat
    for x in range(h[3]):
        parseMaterial(bs.readBytes(2112), materials)
    
    
    #bs.seek(h[4]*144,1)#skip bone?
    bones = []
    for x in range(h[4]):
        name = noeAsciiFromBytes(bs.readBytes(32))
        pos = NoeVec3.fromBytes(bs.readBytes(12),1)
        ang = NoeAngles.fromBytes(bs.readBytes(12),1)#.toMat43()
        rot = ang.toMat43()
        scl = NoeVec3.fromBytes(bs.readBytes(12),1)
        rot[3] = pos
        #bs.seek(76,1)
        print('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        print(name)
        print(pos, ang, scl)
        #print([bs.readFloat() for y in range(6)])
        bs.seek(24,1)#bounds
        inf = [bs.readShort() for y in range(4)]
        print(inf)#10
        print([bs.readByte() for y in range(44)])
        #bs.seek(44,1)
        bones.append(NoeBone(x,name,rot,None,inf[0]))
    
    print(h[4],'<<<<<<<<<<<<<<<<<<<<<<<,,')
    
    submesh = []
    for x in range(h[5]):
        #bs.seek(64,1)
        matID = bs.readShort()
        bs.seek(6,1)#8
        boneMap = [bs.readShort() for y in range(28)]
        boneMap = [y for y in boneMap  if y != -1]
        
        submesh += [[bs.readInt() for y in range(4)]+[boneMap]+[matID]]
        print('submesh:',submesh[-1])
    
    rapi.rpgSetEndian(1)
    for x in submesh:
        bs.seek(h[0]+x[1])
        ibuf = bs.readBytes(x[0])
        
        bs.seek(h[0]+x[3])
        vbuf = bs.readBytes(x[2])
        wbuf = b'\xFF'*(len(vbuf)//16)

        rapi.rpgSetBoneMap(x[4])
        rapi.rpgSetName('mesh_%i'%x[1])
        try:
            rapi.rpgSetMaterial(materials[x[5]].name)
        except:
            print('Error Material %i !'%x[5])
        rapi.rpgBindPositionBuffer(vbuf, noesis.RPGEODATA_FLOAT, 40)
        rapi.rpgBindUV1BufferOfs(vbuf, noesis.RPGEODATA_USHORT, 40, 24)
        rapi.rpgSetUVScaleBias(NoeVec3([32,32,1]), None)
        
        rapi.rpgBindBoneIndexBufferOfs(vbuf, noesis.RPGEODATA_UBYTE, 40, 12, 1)
        rapi.rpgBindBoneWeightBuffer(wbuf, noesis.RPGEODATA_UBYTE, 1, 1)
        
        rapi.rpgCommitTriangles(ibuf, noesis.RPGEODATA_SHORT, len(ibuf)//2, noesis.RPGEO_TRIANGLE_STRIP)
        
    rapi.rpgSetOption(noesis.RPGOPT_TRIWINDBACKWARD, 1)
    bones = rapi.multiplyBones(bones)
    rapi.rpgSkinPreconstructedVertsToBones(bones)
    mdl = rapi.rpgConstructModel()
    mdl.setBones(bones)
    mdl.setModelMaterials(NoeModelMaterials(texList, materials))
    mdlList.append(mdl)
    return 1
    
def loadTextures(texList):
    import fmt_XBOX_360_XPR as xpr
    xprFile = rapi.getInputName().replace('.mdl', '.xpr')
    if rapi.checkFileExists(xprFile):
        data = rapi.loadIntoByteArray(xprFile)
        xpr.XPRLoadRGBA(data, texList)
        
def parseMaterial(data, materials):
    mat = NoeMaterial(noeAsciiFromBytes(data[:31])+"_"+str(len(materials)), '')
    diffOfs = data.find(b'g_DiffuseTexture')
    if diffOfs != -1:
        mat.setTexture(noeAsciiFromBytes(data[diffOfs+31:diffOfs+63]))
    bumpOfs = data.find(b'g_BumpmapTexture')
    if bumpOfs != -1:
        mat.setBumpTexture(noeAsciiFromBytes(data[bumpOfs+31:bumpOfs+63]))
        
    materials.append(mat)
    