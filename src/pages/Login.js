import AppLoginForm from "../components/AppLoginForm";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppLoginForm />
      </motion.div>
    </>
  );
}
