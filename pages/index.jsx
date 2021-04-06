/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "theme-ui";
import dynamic from "next/dynamic";
// import BrowserComponent from "../src/components/Browser";

const BrowserComponent = dynamic(() => import("../src/components/Browser"), {
    ssr: false,
});

const RootPage = ({ content = {} }) => {
    const { manufacturers = [] } = {};

    return (
        <div sx={{ height: "calc(100vh-60px)" }}>
            <BrowserComponent />
            <div
                sx={{
                    variant: "container.page",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
                <ul>
                    {manufacturers.map((i) => (
                        <li key={i.name}>{i.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RootPage;

export function getStaticProps() {
    return {
        props: {
            content: {
                title: "this title",
            },
        },
    };
}
