import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { List, ListItem } from "@/components/List";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { Testimonial } from "@/components/Testimonial";
import logoBrightPath from "@/images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "@/images/clients/family-fund/logo-light.svg";
import logoGreenLife from "@/images/clients/green-life/logo-light.svg";
import logoHomeWork from "@/images/clients/home-work/logo-light.svg";
import logoMailSmirk from "@/images/clients/mail-smirk/logo-light.svg";
import logoNorthAdventures from "@/images/clients/north-adventures/logo-light.svg";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import logoPhobiaLight from "@/images/clients/phobia/logo-light.svg";
import logoUnseal from "@/images/clients/unseal/logo-light.svg";
import imageLaptop from "@/images/laptop.jpg";
import { type CaseStudy, loadCaseStudies, type MDXEntry } from "@/lib/mdx";

const clients = [
	["Phobia", logoPhobiaLight],
	["Family Fund", logoFamilyFund],
	["Unseal", logoUnseal],
	["Mail Smirk", logoMailSmirk],
	["Home Work", logoHomeWork],
	["Green Life", logoGreenLife],
	["Bright Path", logoBrightPath],
	["North Adventures", logoNorthAdventures],
];

function Clients() {
	return (
		<div className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
			<Container>
				<FadeIn>
					<h2 className="font-display text-4xl font-semibold tracking-wider text-white sm:text-left">
						Trusted by leading brands and teams
					</h2>
					<p className="text-neutral-300 pt-4 text-lg">
						These logos highlight the companies that trust us with full,
						end-to-end projects.
					</p>

					<p className="text-neutral-300 pt-2 text-lg">
						We don’t only work with big budgets. We also support individuals —
						from startup founders with an early idea, to designers who need an
						extra dev, to anyone exploring what AI can bring to their work.
						Whether it’s a complete build or a single service, we help turn
						ideas into reality. Want to see how? Take a look at our case
						studies.
					</p>

					<div className="flex items-center gap-x-8 pt-24">
						<p className="text-center font-display text-sm font-semibold tracking-wider sm:text-left text-neutral-300">
							solving problems, sharing ideas, and bringing products to life
							together.
						</p>
						<div className="h-px flex-auto bg-neutral-800" />
					</div>
				</FadeIn>
				<FadeInStagger faster>
					<ul className="mt-10 grid grid-cols-4 gap-x-8 gap-y-10">
						{clients.map(([client, logo]) => (
							<li key={client}>
								<FadeIn>
									<Image src={logo} alt={client} unoptimized />
								</FadeIn>
							</li>
						))}
					</ul>
				</FadeInStagger>
			</Container>
		</div>
	);
}

function CaseStudies({
	caseStudies,
}: {
	caseStudies: Array<MDXEntry<CaseStudy>>;
}) {
	return (
		<>
			<SectionIntro
				title="Harnessing technology for a brighter future"
				className="mt-24 sm:mt-32 lg:mt-40"
			>
				<p>
					We believe technology is the answer to the world’s greatest
					challenges. It’s also the cause, so we find ourselves in bit of a
					catch 22 situation.
				</p>
			</SectionIntro>
			<Container className="mt-16">
				<FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					{caseStudies.map((caseStudy) => (
						<FadeIn key={caseStudy.href} className="flex">
							<article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
								<h3>
									<Link href={caseStudy.href}>
										<span className="absolute inset-0 rounded-3xl" />
										<Image
											src={caseStudy.logo}
											alt={caseStudy.client}
											className="h-16 w-16"
											unoptimized
										/>
									</Link>
								</h3>
								<p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
									<time
										dateTime={caseStudy.date.split("-")[0]}
										className="font-semibold"
									>
										{caseStudy.date.split("-")[0]}
									</time>
									<span className="text-neutral-300" aria-hidden="true">
										/
									</span>
									<span>Case study</span>
								</p>
								<p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
									{caseStudy.title}
								</p>
								<p className="mt-4 text-base text-neutral-600">
									{caseStudy.description}
								</p>
							</article>
						</FadeIn>
					))}
				</FadeInStagger>
			</Container>
		</>
	);
}

function Services() {
	return (
		<>
			<SectionIntro
				eyebrow="Services"
				title="We help you identify, explore and respond to new opportunities."
				className="mt-24 sm:mt-32 lg:mt-40"
			>
				<p>
					As long as those opportunities involve giving us money to re-purpose
					old projects — we can come up with an endless number of those.
				</p>
			</SectionIntro>
			<Container className="mt-16">
				<div className="lg:flex lg:items-center lg:justify-end">
					<div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
						<FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
							<StylizedImage
								src={imageLaptop}
								sizes="(min-width: 1024px) 41rem, 31rem"
								className="justify-center lg:justify-end"
							/>
						</FadeIn>
					</div>
					<List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
						<ListItem title="Web development">
							We specialise in crafting beautiful, high quality marketing pages.
							The rest of the website will be a shell that uses lorem ipsum
							everywhere.
						</ListItem>
						<ListItem title="Application development">
							We have a team of skilled developers who are experts in the latest
							app frameworks, like Angular 1 and Google Web Toolkit.
						</ListItem>
						<ListItem title="E-commerce">
							We are at the forefront of modern e-commerce development. Which
							mainly means adding your logo to the Shopify store template we’ve
							used for the past six years.
						</ListItem>
						<ListItem title="Custom content management">
							At Studio we understand the importance of having a robust and
							customised CMS. That’s why we run all of our client projects out
							of a single, enormous Joomla instance.
						</ListItem>
					</List>
				</div>
			</Container>
		</>
	);
}

export const metadata: Metadata = {
	description:
		"We are a development studio working at the intersection of design and technology.",
};

export default async function Home() {
	const caseStudies = (await loadCaseStudies()).slice(0, 3);

	return (
		<>
			<Container className="mt-24 sm:mt-32 md:mt-56">
				<FadeIn className="max-w-3xl">
					<h1 className="font-display text-6xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
						The Flow Agency — Design, engineering & AI that ship.
					</h1>
					<p className="mt-6 text-xl text-neutral-600">
						We build digital products people actually use. Combining design
						craft with pragmatic engineering and a dash of AI, we create
						experiences that delight users and move businesses forward.
					</p>
				</FadeIn>
			</Container>

			<Clients />
			<Services />

			<CaseStudies caseStudies={caseStudies} />

			<Testimonial
				className="mt-24 sm:mt-32 lg:mt-40"
				client={{ name: "Phobia", logo: logoPhobiaDark }}
			>
				The team at PilotX Studio went above and beyond with our onboarding,
				even finding a way to access the user’s microphone without triggering
				one of those annoying permission dialogs.
			</Testimonial>

			<ContactSection />
		</>
	);
}
