import { Text } from "@mantine/core";
import type { ReactNode } from "react";


export function Bolded({ children }: { children: ReactNode }) {
  return <Text component="span" size="lg" c="#5ec4a2" fw={700}>{children}</Text>
}