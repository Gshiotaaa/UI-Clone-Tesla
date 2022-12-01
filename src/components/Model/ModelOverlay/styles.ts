import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: sticky;
  top: 0;
  margin-top: -100vh;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
