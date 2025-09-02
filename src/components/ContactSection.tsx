import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Offices } from "@/components/Offices";

export function ContactSection() {
	return (
		<Container className="mt-24 sm:mt-32 lg:mt-40">
			<FadeIn className="rounded bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
				<div className="mx-auto max-w-4xl">
					<div className="max-w-xl">
						<h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl">
							Tell us the problem — we’ll map the solution.
						</h2>
						<p className="mt-6 text-xl text-neutral-300">
							We’ll translate your intent into a product concept, UX direction
							and a phased engineering plan, beautifully designed, technically
							sound.
						</p>
						<p className="mt-6 text-xl text-neutral-300">
							Explain the use case and data you have — we’ll outline realistic
							AI integrations, required infra, and the ROI to expect
						</p>
						<div className="mt-6 flex">
							<Button href="/contact" invert>
								Get a quote now
							</Button>
						</div>
						{/* <div className="mt-10 border-t border-white/10 pt-10"> */}
						{/* 	<h3 className="font-display text-base font-semibold text-white"> */}
						{/* 		Our office */}
						{/* 	</h3> */}
						{/* 	<Offices */}
						{/* 		invert */}
						{/* 		className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" */}
						{/* 	/> */}
						{/* </div> */}
					</div>
				</div>
			</FadeIn>
		</Container>
	);
}
