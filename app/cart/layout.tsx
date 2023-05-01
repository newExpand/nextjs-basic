import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <p>
            현태카드 무이자이벤트중
            {children}
        </p>
    );
}
