import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import {
  RxChatBubble,
  RxCode,
  RxDividerVertical,
  RxHome,
  RxPerson,
} from "react-icons/rx"
import { RiGithubFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri"
import { FaFileDownload } from "react-icons/fa"

export default function Header() {
  return (
    <header className="sticky top-0 z-[9999] mb-20 mt-16 flex h-24 content-center items-center justify-between bg-white font-sans text-base shadow dark:bg-black">
      <div className="flex gap-4">
        <Link href="/" className="max-sm:hidden">
          Accueil
        </Link>
        <Link href="/" className="sm:hidden">
          <RxHome />
        </Link>
        <Link href="/posts" className="max-sm:hidden">
          Blog
        </Link>
        <Link href="/posts" className="sm:hidden">
          <RxChatBubble />
        </Link>
        <Link href="/about" className="max-sm:hidden">
          À propos
        </Link>
        <Link href="/about" className="sm:hidden">
          <RxPerson />
        </Link>
        <Link href="/projects" className="max-sm:hidden">
          Projets
        </Link>
        <Link href="/projects" className="sm:hidden">
          <RxCode />
        </Link>
      </div>
      <div className="flex justify-between gap-4">
        <Link href="https://youtube.com/">
          <RiYoutubeFill />
        </Link>
        <Link href="https://x.com/">
          <RiTwitterFill />
        </Link>
        <Link href="https://github.com/Aestraa">
          <RiGithubFill />
        </Link>
        <RxDividerVertical className="text-gray-300 dark:text-gray-600" />
        <ThemeToggle />
        <a
          href="/cv_MOINY-Yanis.pdf"
          download="Yanis_MOINY_CV.pdf"
          className="items-center pr-4 max-sm:hidden sm:flex md:pr-8 lg:pr-12"
          title="Télécharger CV"
        >
          Télécharger CV
        </a>
        {/* Icône de téléchargement seule pour les petits écrans */}
        <a
          href="/cv_MOINY-Yanis.pdf"
          download="Yanis_MOINY_CV.pdf"
          className="flex items-center pr-4 sm:hidden"
          title="Télécharger CV"
        >
          <FaFileDownload />
        </a>
      </div>
    </header>
  )
}
