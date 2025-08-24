import Layout from "./Layout.jsx";

import VerificadorEquipaje from "./VerificadorEquipaje";

import ConsejosViaje from "./ConsejosViaje";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    VerificadorEquipaje: VerificadorEquipaje,
    
    ConsejosViaje: ConsejosViaje,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<VerificadorEquipaje />} />
                
                
                <Route path="/VerificadorEquipaje" element={<VerificadorEquipaje />} />
                
                <Route path="/ConsejosViaje" element={<ConsejosViaje />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}