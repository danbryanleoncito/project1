import AppCarousel from "../components/AppCarousel";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppCarousel />
        <Products />
      </motion.div>
    </>
  );
}
