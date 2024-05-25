import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
	title: "Madrimov Dev - Full Stack Developer",
	description:
		"Madrimov Dev - Full Stack Developer. Frontend Developer with experience in ReactJS, TypeScript, Redux Toolkit, and more. Portfolio at madrimov.uz.",
	keywords: [
		"Full Stack Developer",
		"Frontend Developer",
		"ReactJS",
		"TypeScript",
		"Redux Toolkit",
		"NextJS",
	],
	authors: [
		{
			name: "Madrimov Xudoshukur",
			url: "https://madrimov.uz",
		},
	],
	applicationName: "Madrimaov's One-link",
	category: "Programming",
	creator: "Madrimov Xudoshukur",
	bookmarks: [
		"https://t.me/madrimov",
		"https://instagram.com/xudish.madrimov",
		"https://github.com/madrimovDev",
	],
	formatDetection: { email: true, date: true, telephone: true, url: true },
	classification: "Programming",
	publisher: "Vercel",
	openGraph: {
		type: "website",
		countryName: "Uzbekistan",
		description:
			"Madrimov Dev - Full Stack Developer. Frontend Developer with experience in ReactJS, TypeScript, Redux Toolkit, and more. Portfolio at madrimov.uz",
		emails: "madrimov5014@gmail.com",
		phoneNumbers: "+998914245014",
		siteName: "onelink.madrimov.uz",
		title: "Madrimov Xudoshukur",
		url: "https://onelink.madrimov.uz",
		images: [
			{
				url: "https://www.madrimov.uz/avatar.jpg",
				alt: "Madrimov Xudoshukur Portfolio",
			},
		],
	},
	twitter: {
		creatorId: "@madrimov_x",
		site: "@madrimov_x",
		card: "summary_large_image",
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
};

export default function Page() {
	return (
		<div className="min-h-screen flex flex-col">
			<video
				autoPlay
				muted
				loop
				className="fixed w-screen h-screen scale-110 z-[-1] opacity-30 blur-sm object-cover"
			>
				<source
					src="/background.webm"
					type="video/webm"
					width="100%"
				/>
			</video>
			<div className="py-10 px-4 max-w-lg w-full flex-1 flex flex-col justify-center mx-auto">
				<div className="flex items-center justify-between gap-2">
					<div>
						<h1 className="text-2xl font-bold">Madrimov Xudoshukur</h1>
						<h2 className="mt-2 text-gray-400">Fullstack Developer</h2>
					</div>
					<Image
						src="https://madrimov.uz/avatar.jpg"
						width={100}
						height={100}
						alt="Madrimov Xudoshukur"
						quality={50}
						className="h-full aspect-square rounded-full"
					/>
				</div>
				<div>
					<p className="mt-4">
						<b>email: </b>madrimov5014@gmail.com
					</p>
					<p>
						<b>phone: </b>+998 91 424 50 14
					</p>
				</div>
				<hr className="border-gray-500 my-8" />
				<div className="flex flex-col gap-2">
					<Link
						href="https://github.com/madrimovDev"
						className="flex items-center gap-4 bg-gray-800/50 hover:bg-gray-800 p-4 rounded-md hover:scale-105 hover:shadow-2xl transition-all"
						target="_blank"
					>
						<Image
							src="/github.svg"
							width={35}
							height={35}
							alt="github"
							className="bg-slate-200 rounded-full"
						/>
						<h4>github.com/madrimovDev</h4>
					</Link>
					<Link
						href="https://www.linkedin.com/in/madrimov"
						className="flex items-center gap-4 bg-gray-800/50 hover:bg-gray-800 p-4 rounded-md hover:scale-105 hover:shadow-2xl transition-all"
						target="_blank"
					>
						<Image
							src="/linkedin.svg"
							width={35}
							height={35}
							alt="github"
							className=""
						/>
						<h4>Xudoshukur Madrimov</h4>
					</Link>
					<Link
						href="https://t.me/madrimov"
						className="flex items-center gap-4 bg-gray-800/50 hover:bg-gray-800 p-4 rounded-md hover:scale-105 hover:shadow-2xl transition-all"
						target="_blank"
					>
						<Image
							src="/telegram.svg"
							width={35}
							height={35}
							alt="github"
							className="bg-slate-200 rounded-full"
						/>
						<h4>@madrimov</h4>
					</Link>
					<Link
						href="https://instagram.com/xudish.madrimov"
						className="flex items-center gap-4 bg-gray-800/50 hover:bg-gray-800 p-4 rounded-md hover:scale-105 hover:shadow-2xl transition-all"
						target="_blank"
					>
						<Image
							src="/instagram.svg"
							width={35}
							height={35}
							alt="github"
							className=""
						/>
						<h4>@xudish.madrimov</h4>
					</Link>

					<Link
						href="https://madrimov.uz"
						className="flex items-center gap-4 bg-gray-800/50 hover:bg-gray-800 p-4 rounded-md hover:scale-105 hover:shadow-2xl transition-all"
						target="_blank"
					>
						<Image
							src="/web.png"
							width={35}
							height={35}
							alt="github"
							className="bg-slate-200 rounded-full"
						/>
						<h4>madrimov.uz</h4>
					</Link>
					<Link
						href="https://blog.madrimov.uz"
						className="flex items-center gap-4 bg-gray-800/50 hover:bg-gray-800 p-4 rounded-md hover:scale-105 hover:shadow-2xl transition-all"
						target="_blank"
					>
						<Image
							src="/blog.png"
							width={35}
							height={35}
							alt="github"
							className="bg-slate-200 rounded-md"
						/>
						<h4>blog.madrimov.uz</h4>
					</Link>
				</div>
			</div>
		</div>
	);
}

