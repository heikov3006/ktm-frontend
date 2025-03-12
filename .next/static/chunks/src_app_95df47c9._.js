(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_95df47c9._.js", {

"[project]/src/app/addKm/addKm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AddKm": (()=>AddKm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function AddKm() {
    _s();
    const [fin, setFin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [km, setKm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAddKm = async (e)=>{
        e.preventDefault();
        console.log('FIN:', fin);
        console.log('KM:', km);
        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        try {
            const response = await fetch('https://it200287.cloud.htl-leonding.ac.at/api/maintenance/addKm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formJson)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log('Server Response:', result);
            // Optional: Reset inputs
            setFin('');
            setKm('');
            // Optional: Erfolgsmeldung anzeigen
            alert('Kilometer erfolgreich hinzugefügt!');
        } catch (error) {
            console.error('Fehler beim Hinzufügen der Kilometer:', error);
            alert('Fehler beim Speichern! Bitte erneut versuchen.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: 400,
            margin: '0 auto',
            padding: 30,
            border: '1px solid #f97316',
            borderRadius: 12,
            backgroundColor: '#1e1e1e',
            color: '#f97316',
            fontFamily: 'Arial, sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    textAlign: 'center',
                    marginBottom: 20
                },
                children: "KTM Bike - Kilometer hinzufügen"
            }, void 0, false, {
                fileName: "[project]/src/app/addKm/addKm.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAddKm,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 15
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "finInput",
                                style: {
                                    display: 'block',
                                    marginBottom: 5
                                },
                                children: "FIN:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/addKm/addKm.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "finInput",
                                name: "fin",
                                placeholder: "FIN eingeben",
                                value: fin,
                                onChange: (e)=>setFin(e.target.value),
                                style: {
                                    width: '100%',
                                    padding: 10,
                                    borderRadius: 6,
                                    border: '1px solid #ccc'
                                },
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/addKm/addKm.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/addKm/addKm.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "kmInput",
                                style: {
                                    display: 'block',
                                    marginBottom: 5
                                },
                                children: "Kilometer hinzufügen:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/addKm/addKm.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "kmInput",
                                name: "km",
                                type: "number",
                                placeholder: "KM",
                                value: km,
                                onChange: (e)=>setKm(e.target.value),
                                style: {
                                    width: '100%',
                                    padding: 10,
                                    borderRadius: 6,
                                    border: '1px solid #ccc'
                                },
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/addKm/addKm.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/addKm/addKm.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        style: {
                            width: '100%',
                            padding: 12,
                            backgroundColor: '#f97316',
                            color: '#fff',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: 6,
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        },
                        onMouseOver: (e)=>e.currentTarget.style.backgroundColor = '#ea580c',
                        onMouseOut: (e)=>e.currentTarget.style.backgroundColor = '#f97316',
                        children: "Speichern"
                    }, void 0, false, {
                        fileName: "[project]/src/app/addKm/addKm.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/addKm/addKm.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/addKm/addKm.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(AddKm, "SccokCSf34msvYH4cOGp1+K3uWg=");
_c = AddKm;
var _c;
__turbopack_context__.k.register(_c, "AddKm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/service/addService.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AddService": (()=>AddService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function AddService() {
    _s();
    const [fin, setFin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [km, setKm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAddKm = async (e)=>{
        e.preventDefault();
        console.log('FIN:', fin);
        console.log('KM:', km);
        const formData = new FormData(e.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        try {
            const response = await fetch('https://it200287.cloud.htl-leonding.ac.at/api/maintenance/addKm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formJson)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log('Server Response:', result);
            // Optional: Reset inputs
            setFin('');
            setKm('');
            // Optional: Erfolgsmeldung anzeigen
            alert('Kilometer erfolgreich hinzugefügt!');
        } catch (error) {
            console.error('Fehler beim Hinzufügen der Kilometer:', error);
            alert('Fehler beim Speichern! Bitte erneut versuchen.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: 400,
            margin: '0 auto',
            padding: 30,
            border: '1px solid #f97316',
            borderRadius: 12,
            backgroundColor: '#1e1e1e',
            color: '#f97316',
            fontFamily: 'Arial, sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    textAlign: 'center',
                    marginBottom: 20
                },
                children: "KTM Bike - Kilometer hinzufügen"
            }, void 0, false, {
                fileName: "[project]/src/app/service/addService.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAddKm,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 15
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "finInput",
                                style: {
                                    display: 'block',
                                    marginBottom: 5
                                },
                                children: "FIN:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/service/addService.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "finInput",
                                name: "fin",
                                placeholder: "FIN eingeben",
                                value: fin,
                                onChange: (e)=>setFin(e.target.value),
                                style: {
                                    width: '100%',
                                    padding: 10,
                                    borderRadius: 6,
                                    border: '1px solid #ccc'
                                },
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/service/addService.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/service/addService.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "kmInput",
                                style: {
                                    display: 'block',
                                    marginBottom: 5
                                },
                                children: "Kilometer hinzufügen:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/service/addService.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "kmInput",
                                name: "km",
                                type: "number",
                                placeholder: "KM",
                                value: km,
                                onChange: (e)=>setKm(e.target.value),
                                style: {
                                    width: '100%',
                                    padding: 10,
                                    borderRadius: 6,
                                    border: '1px solid #ccc'
                                },
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/service/addService.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/service/addService.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        style: {
                            width: '100%',
                            padding: 12,
                            backgroundColor: '#f97316',
                            color: '#fff',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: 6,
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                        },
                        onMouseOver: (e)=>e.currentTarget.style.backgroundColor = '#ea580c',
                        onMouseOut: (e)=>e.currentTarget.style.backgroundColor = '#f97316',
                        children: "Speichern"
                    }, void 0, false, {
                        fileName: "[project]/src/app/service/addService.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/service/addService.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/service/addService.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(AddService, "+EgJXblE0+lgKG4YVIKH/yAaOWQ=");
_c = AddService;
var _c;
__turbopack_context__.k.register(_c, "AddService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6CSEXPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/development/chunk-K6CSEXPM.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$addKm$2f$addKm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/addKm/addKm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$addService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/service/addService.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        minHeight: '100vh'
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f97316',
        padding: '1rem 2rem'
    },
    brand: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '1rem',
        margin: 0,
        padding: 0
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold'
    },
    content: {
        padding: '2rem'
    }
};
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    style: styles.navbar,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: styles.brand,
                            children: "KTM Maintenance"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: styles.navLinks,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6CSEXPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/",
                                        style: {
                                            textDecoration: 'none',
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        },
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6CSEXPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/add-km",
                                        style: {
                                            textDecoration: 'none',
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        },
                                        children: "Kilometer hinzufügen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6CSEXPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        to: "/service",
                                        style: {
                                            textDecoration: 'none',
                                            color: '#fff',
                                            fontWeight: 'bold'
                                        },
                                        children: "Service hinzufügen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.content,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6CSEXPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Routes"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6CSEXPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                path: "/",
                                element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Home, {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 38
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6CSEXPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                path: "/add-km",
                                element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$addKm$2f$addKm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddKm"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 44
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$development$2f$chunk$2d$K6CSEXPM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Route"], {
                                path: "/service",
                                element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$service$2f$addService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddService"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 45
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_95df47c9._.js.map