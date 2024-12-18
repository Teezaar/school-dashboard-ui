"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ClientPortalProps {
    children: React.ReactNode;
}

const ClientPortal = ({ children }: ClientPortalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return ReactDOM.createPortal(children, document.body);
};

export default ClientPortal;
