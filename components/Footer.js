import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <Container>
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <Image
                src="/img/bait.svg"
                alt="N"
                width="52"
                height="52"
                className=""
              />
              <span>BaitBuster</span>
            </Link>
          </div>

          <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            BaitBuster is my undergraduate research in the field of data mining. The main objective of BaitBuster is to develop an effective system for detecting clickbait headlines in online news articles.
          </div>
        </div>
      </div>

      <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
        Copyright © {new Date().getFullYear()}. Made with ♥ by{" Amara"}
      </div>
    </Container>
  );
}

