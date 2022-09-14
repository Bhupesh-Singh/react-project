import { androidApps, chromeExtensions } from "../../data/appListData";
import CenterScreenMessage from "./CenterScreenMessage";

export default function About() {
    return (
        <CenterScreenMessage>
            This is a simple React project built using React, Redux-Toolkit and React-Router.
            <AppList appData={chromeExtensions}>Some chrome extensions that I have built</AppList>
            <AppList appData={androidApps}>Some Android apps that I have built</AppList>
        </CenterScreenMessage>
    );
}

function AppList({appData, children}) {
    const centerStyle = {
        textAlign: 'center',
    }

    return (
        <div>
            <h4 style={centerStyle}>{children}</h4>
            <div className="apps-link-container">
                {appData.map(extension => {
                    return <App key={extension.id} {...extension}/>
                })}
            </div>
            <br />
        </div>
    )
}

function App({title, link, imgSrc}) {
    return (
        <div>
            <a href={link} rel="noreferrer" target="_blank">
                <div className="apps-link" style={{backgroundImage: `url(${imgSrc})`}}>
                    {title}
                </div>
            </a>
        </div>
    )
}
