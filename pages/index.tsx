import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Home = () => {
  // return <div className={styles.container}>{JSON.stringify(contacts)}</div>;
  return "HII";
};

// export async function getServerSideProps(context) {
//   const contacts = await prisma.contact.findMany();
//   return {
//     props: {
//       contacts: contacts,
//     }, // will be passed to the page component as props
//   };
// }

export default Home;
