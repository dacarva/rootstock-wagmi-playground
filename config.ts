import { rootstock, Chain } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

const rootstock_testnet: Chain = {
	id: 31,
	name: "Rootstock Testnet",
	nativeCurrency: {
		name: "tRBTC",
		symbol: "tRBTC",
		decimals: 18,
	},
	rpcUrls: {
		public: { http: ["https://public-node.testnet.rsk.co"] },
		default: { http: ["https://public-node.testnet.rsk.co"] },
	},
	blockExplorers: {
		default: { name: "RSK Explorer", url: "https://explorer.testnet.rsk.co/" },
	},
};

export const wagmiConfig = getDefaultConfig({
	appName: "RainbowKit App",
	projectId: "YOUR_PROJECT_ID",
	chains: [
		rootstock,
		...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
			? [rootstock_testnet]
			: []),
	],
	ssr: true,
});
