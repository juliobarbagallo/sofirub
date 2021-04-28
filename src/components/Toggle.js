import {
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";

function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <HiMoon /> : <HiSun />}
      </Button>
    </header>
  )
}

export default Toggle