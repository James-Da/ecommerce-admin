import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();
	console.log(session);
	return (
		<Layout>
			<div className="text-blue-900  flex justify-between">
				<h2>
					Hello, <b>{session?.user?.name}</b>
				</h2>
				<div className="flex bg-gray-300 text-black gap-1">
					<img
						src={session?.user?.image}
						alt="profile picture"
						className="w-6 h-6 rounded-lg overflow-hidden"
					/>
					<span className="px-2">{session?.user?.name}</span>
				</div>
			</div>
		</Layout>
	);
}
