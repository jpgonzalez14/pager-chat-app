import React from "react";
//components
import MainCard from "../components/Cards/MainCard";
import UsernameFrom from "../components/Forms/UsernameFrom";

export default function PagerRegister({setUsername, useHistory}) {
    let history = useHistory();
    return (
        <section>
            <div className="justify-content-middle">
                <MainCard title={"Join chat"} classNames={"card round-border-8 shadow p-40"}>
                    <UsernameFrom
                        label={"Please enter your username"} setUsername={setUsername} history={history}/>
                </MainCard>
            </div>
        </section>
    )
};