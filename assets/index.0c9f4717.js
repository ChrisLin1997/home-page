var C=Object.defineProperty;var w=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var P=(o,A,t)=>A in o?C(o,A,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[A]=t,B=(o,A)=>{for(var t in A||(A={}))u.call(A,t)&&P(o,t,A[t]);if(w)for(var t of w(A))E.call(A,t)&&P(o,t,A[t]);return o};import{s as i,j as n,a as e,r as l,D as b,R as f}from"./vendor.aa836c45.js";const D=function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))a(g);new MutationObserver(g=>{for(const r of g)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(g){const r={};return g.integrity&&(r.integrity=g.integrity),g.referrerpolicy&&(r.referrerPolicy=g.referrerpolicy),g.crossorigin==="use-credentials"?r.credentials="include":g.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(g){if(g.ep)return;g.ep=!0;const r=t(g);fetch(g.href,r)}};D();const m=i.div`
  margin-bottom: 24px;
  padding: 16px 24px;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #2f2f3d;
`,U=i.div`
  margin: auto;
  font-size: 28px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 2px 2px #191919;
  user-select: none;
`,M=i.div`
  position: absolute;
  top: 18px;
  right: 24px;
`,s=i.a`
  margin-right: 24px;
  color: #B7C2CB;
  font-size: 14px;

  &:hover {
    border-bottom: 1px solid #B7C2CB;
  }
`,v=()=>n(m,{children:[e(U,{children:"Hi Chris Lin"}),n(M,{children:[e(s,{href:"https://mail.google.com/",children:"\u4FE1\u7BB1"}),e(s,{href:"https://www.google.com.tw/maps",children:"\u5730\u5716"}),e(s,{href:"https://meet.google.com/osp-jkdt-gfu",children:"Meet"}),e(Q,{})]})]}),R=i.input`
  padding: 12px 24px;
  width: 200px;
  height: 32px;
  border: 0;
  border-radius: 24px;
  font-size: 16px;
  outline: none;
`,Q=()=>e(R,{placeholder:"\u641C\u5C0B Google",onKeyDown:A=>{A.code==="Enter"&&(window.location.href=`https://www.google.com/search?q=${A.currentTarget.value}`)}});var X="/home-page/assets/binance.8318ebbc.png",G="/home-page/assets/ftx.4d076901.png",H="/home-page/assets/bybit.c30d523e.png",N="/home-page/assets/max.4fad6937.png",x="/home-page/assets/coinmarketcap.54e8edf6.png",y="/home-page/assets/francium.a94eb2c4.png",k="/home-page/assets/raydium.441bab08.png",J="/home-page/assets/solanium.b04e42e9.png",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJoSURBVHic7ZsxT1NRGEDPd60oiUicDElZWVxMujHRdiP8AkYXR8JSYxOiYejQzR+AY0eNiXGS4iJbExcwYXCwQO0gJLSxBJr3OQgJMZFLqd6vtveM7ev9zjt5Ly836RNV5SJSXJ9xKosKGVHNgEzxX6MNFakJ1BLRipbyOxe/lfMAIogrVJcQSsC4hWoAOijFpJx7oYrCWQARRArVtyLMWxuGQJV3Ws4tqKIOwBWqS6Ny8gAizLtCdQlAePp+xiXyieG97P9EJ3H60DmVRUbv5AHGncqiU8hYm1ihkHG/HnWjiahmUld5zqcnx1iZSzM7PcH9Ozd7GtJsn7JZb7G6scve0cmVfhNunkyJe7Kulx2Snhzjw6MH3L11oyeR3zk87pJd22a/dblU6HnOt9DKXLpvGYB7t1M8y6W9x4We5w0wOz3Rt0wva4We5w3Q6z3Y71qh53kDDDsxgLWANTGAtYA1MYC1gDUxgLWANTGAtYA1MYC1gDUxgLWANTGAtYA1MYC1gDUDF6DZPg261sAF2Ky3/tpaH7/61xq4AKsbuxwed/te5/uPLs+rde9xAxdg7+iE7No2rz8fXOt2aLZPebV9QPblFt+u8PvUdST/NfutEx6/+RJk1sBdAaGJAawFrIkBrAWsiQGsBayJAawFrIkBrAWs8QYIvT8PjTdA6P15aLwBQu/PQ+MNEHp/HhrvX2WHnfgUsBawJgYAbVhL2KENpyI1aw0rVKTmBEY2gEDNJaIVoGMtY0AnEa04LeV3UIrWNsFRilrK78RXZ88+UC3nFlCWGe7boYOyfH7ycOHt8XNG7fX5n72PE0eJmc8RAAAAAElFTkSuQmCC",T="data:image/png;base64,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",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAYAAAAYefKRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVASURBVHgB7d2/TiNXFIDx4yglKGmhckW7BOhxHgCilNAsHeWuBL3NA6CwpaHYraDcXfEAgQdAIS2VK2iRoHfu8cYR8Z4ZuP4zc8/l+0kjC3vRYvg8M1xf7jRkTP1+fyfcvA3bcth+FtyH7SJsXxuNxidxriGRQhAaweewtQRFemH7NQTSE6fGCeM63LwRPKcXtt9DHNfiUFQY/x4+Po7e//DwIGdnZ3J1dTXYctXtdmV1dTXmU3ridM/xo8R5N3rH7e2t7O7uyt3dneA7zbD9GV5Q7uL4QeIsP/2AKF6kKd/iaIojLw7DemInJydEMWJjY2PwghnRFGdxxO4x/qNP/vz8XPB/+kLRvaj3OMYO4+bmRmDLIQ7CmBHvcYwdBp7nOQ7CmDGvcRBGBTSO/f39wUDgiKZ8iyO595oIoyJ6TqZ7Di9xEEaFNA7dcxh04DCpOAijYvpe0sHBgfVQUnEQRg10YDD1OAijJhrH8fGx9ZDG8VlqFhMGs7SmTMMoiKMV9hofpUaEUbOSOHbqjINDSQJSjIMwEpFaHISREA2jYCqDxvGHVIgwEqO/xhbE8T7E0ZaKEEaCNI6CSdWdquIgjETp0HnBnJdK4iCMROmbbfqmW11xEEbChnEYcznUTOMgjMTVFQdhOFAyC0zNJA7CcKLqOAjDkSrjIAxnSuaPKo3jrUwBYThUMn9UfZpGHIThVMn8UTVxHIThWMn8UTVRHDFhNAXJKZk/qsaOgz1GBjSOw8PDooePQhzLEokwMqFLXV1cXFgPDRbTi515HrvUEp6hC6fURc85Wq2W9VAzbDthO5IXIowpa7crm0sT6zeJCINDyesRdZ5BGBGcrzcWdY5BGBEK3qPIEmFEyHlx21GEESH3lY+fIoxInU7nVRxSCCPScE5EwWBSNhjHGMNwToQuOK8DSktLS5Ka+fn5ib4uwphAyuccGq1eLWFcHEpgIgyYCAMmVtSBiTBg4lACE2HA5GYcY2FhQbzz9La9izB0VlSdU+amxdPFBZM/lOiQcw5RqMXFRdne3hYPkg9Dx/xz4uX5cPIJE2HARBgwEQZMyYeR2zS6gjUtkpN8GDoRRtfY9vINLTN8Lh64GOAqWZkfM8I5BkyEARPzMWAiDJg4lMBEGDARBkyEAZOLAa6tra3BZJ25uTnx6vHxcTDyWbLsYlKSD0P/BnNvb09yoH9krEP7HkZxkz+U6HS4nHh5PpxjwEQYMBEGTIQBE2FUjBlcU6KLoOUyvU+jOD09FQ+SH8fQb+bm5uZgPMM7vVyVlz2Gmz9qfk2r8qaA+RgwxYTxk+DV4LcSmAgDJsKAiTBgIgyYXIxj6MJsOSy3pGtv6cVzPUg+DI1Ch5FzWXJJRz49XOsk+UPJ2tpaVutwFVwwNzmcY8BEGDARBkyEARNhwORiBlcO628NeZlX4mIGl66/ncMAl6crPbsY+dQRQxZnqxYzuGAiDJj4rQQmwoCJMGAiDJgIAybCgIkwYCIMmAgDJsKAiTBgIgyYCAMmwoCJMGBiPgZMhAEThxKYxg4jt8tF5GbSn09MGPdPP1hfXxeka2VlRSYRE0bv6Qe6NEEOq/XmqGChmWuJEBPG5egd7XZ78EUgLZ1Ox7p7ZmF8Gb1Dj2Pdbpc4EqF7cX2xFuzJDyRCI+Yf9/v9o3DzbvR+/TPCy8vLwZJIupA6qqUvTF2pR682WXDS+aHRaLyXCFFhqBDHX+FmWeDF32FrhTDuYz4p+tfV8B/8Em4+CDzQn1N0FCp6jzEU9hzNcNMJ2xthD5KSXti+hu1LCOJCxvQPkn9G45BHCYAAAAAASUVORK5CYII=",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAADSGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE3LTA0LTIxVDE5OjA0OjcyPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIDMuNjwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTAyNDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTAyNDwvZXhpZjpQaXhlbFlE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",j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAByFBMVEUAAAAegP8fgP8egf8eev8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP8egP////9x6/jYAAAAlnRSTlMAAAAAAAZdWwUQhvTzhA8lq/ypJHH5C3PsBAJO2dghl2AqYZg7yBGIe/itJq96CGrozkMBRdDnaQwDaAfPN7ZwCfaUlnK3OGPeGP4Z8rww4+JeMr3xWt/aUjzHU9tYw+55IKSiHw3vwjYdn/qhCh6eHHfEOsbtdVDg4ddPL7qDhbkuF/cjrJMWbOnR0mtGKLD9JxKK9Ym9ME1eAAAAAWJLR0SX5m4brwAAAAd0SU1FB+UGEgMGHcgXPyMAAAHTSURBVDjLrVNpV1JRFH1bk55AISFPAVEQQXEgFTWQVDBDUsws5yErc8rU5tGZyjFNsvt7PfcBLizAtVqeD3fdu+9+5+6z3zmCcMkBioz3OYqrIjJ8nqtUqa9dT5cE0ORpGdPe0KVhAPl6RqHPT0uQCgoZKyyQUhAAgxECjKYis0neGM6TgOISC8kHrFa6gVhqK05mAGV2plY6YhjgKFcxe1kSA8YKJ8mv1HAMqKqmYpw1xuQUrpu1pL+u3g24Gxpp23TLhUR6j5dejcPNPp9MvU1UAQYPF9TS2uZHInGg/U4g8Rj8HXeDEDpDzFlyj/8kLo11dbGYXKDb5mShTqE8TGjPfbk4Sy938kGfXPDDR8TtVwriwCCBQ8NcCEbsjI3y+uAdGyc4NCEKyGp5TNvJJx5kA0+fTT3n6acrZgicnYvVPf9igbGFl/P8Rlrk69IUIfrlV3GvIL2eJP6b4JW4k2/f0fH9B+nMKXg/mgn6JHcTRMVnOnz5es5JrKyS5vBaLnXVuprq2tj8+3dutUfIobxvuu/kV+TH9j89AdfOLmXe26el9sCVoqfg/rnH5GhscKfsOeDw6Bc9U32cvq2jv09Uf6IZZocGR5GTebQuGL3/iVNGTHdSXGp/KgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNi0xOFQwMzowNjoyOSswMDowMBW0AwoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDYtMThUMDM6MDY6MjkrMDA6MDBk6bu2AAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQUSURBVHic7ZpbaFxFHMZ/M+dsk7i7aW66MSnFlwWrgg8FL4gh0CQmVCsRUbyEiviUl6BFC2KxWFAKQqUXKdSkBCwoPghtQHrZB2+t4pMPTbUmWLJJ2iQ1MdntZZPd8/fBbkliUoPsmdnG83s7Z+bM9803M5wzh4GAgICAgICAgP8paiWVpLGxdC4UekArdTciMSWiC2VAnz37eKHa8sDDdYe0UufR+pi6cOHPf3vGXa5AQOWamrYAHTlo1SJhRPJlhePixYI1tWBUHEeksnLEi0R6nWTyneWeWXIGzLa0PKw9bw/waMHcLYNz6pTfEkg0mvIqKrrcZPLw4rJ/TOVsc/Nr2vO+wUDnTaFSqagzPNwjdXWfLy5bEECuufltRA4Ba4y5M4UIjI4+58Vix+ffvhlAtqnpGRHZZd6ZWdTYWEuuvn5P/loDSGNjLdDLEktiNaLHxrpk/fr74EaHc6HQTiBi05RRslklV658BqBk06ZYTqkkELLhxcRbYEmUgnh8g84ptQVLnbeKCKTTb2lgs20v1rh27QktELftwxqZTJWroM5vHb17N6TTeAcOwOSk33IrZ3a2RAMVfuuo6mpUQwNOTw+qvR10kbxts1ll1kk4jO7sRO/fj4oXx8qzMhQqHkfv24fu7ESqa2xYuIm9ueg4qPZ2Js4NkHlzuzUb1hdjTrtMbt/BVP8A3r0bjOtbDyDP9btqmfjuJ672HgHHMaZbNAEAeMD05qf54/cRsq1tRjSLKoA8s3dEmPj0C1KJr5Foua9aRRlAnvSDG7k8mCTT9bpvGkUdAEBWO0zu2MXMtz/40n7RB5BHQv5sWIs+ADeXper9nax9ZKM/7fvSagFQCsI/niby/LOo1IxvOkUZQMnUZdZufQnn9Pe+axXVEnDEo/KTj6mK32Ok81BEMyD8az/R9idR4+NGda3PgDVX09z5yguUP/aQ8c6DzRmQSuF1d1O9bRt4njUb5gMQQRIJvIMHYXraaufBcAAyOIjs3Yv095uUvSUuMAVU+ikiZ84gfX3I0aPWR3w+EgqJq5QaFRFfA/C6u/1s/j+jQqGMFpHfbBuxhZSUTGpE+mwbsYWUlX2lHcc5BszZNmMcpdCRyIdanTgxDhyy7cc4NTU/q/Pnf9EAjsh7QMqyJXO4rlBW9iLc+BRWicQYSm3l7/+Sqx4vFvtIDQ31w7y9gHvy5JdKZNnzdKsFqa097oyMvJG/Xni2MJH4AJGXgevGnfmN1lBXd1hfutS64Pbiem4iccQTaQDMbMgNINHoTG7dug41Ovrq4rJbnhXOtrQ8hed1AK1A1A9zvp0RchyR8vIRFQ73qOHhd5ertrLD0m1tJXOZzP3adetvh8PSInLOKS3tUwMD/v1MDAgICAgICAi43fkLku1QH2W9+oMAAAAASUVORK5CYII=",O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARiSURBVFiFrZddbBRVFMd/587sWrr9RtuCAkpD4kcINKAm+GLVmJhojJb44IPBEI0PGCQG2kSFRX0AggSMIVEDGGIEEV5MTIgBRUlAwBQkAg/UYqpAW8rS/Wi7bXfn+DDbpbuz251V/y+7c8+d8/vfc2fuvSOUo7DajaPxRwyyCHS+KjUAIsRAehyj5wbuqD5DWFJ+U4qfTo0diUUGZzXQDi50GkWBQ07a7BjYWnX+PxmY/c7InPRE6l0RVgKWH7NT5ACHVJzO/k11PWUbaO6IvwTsAa0sE5yvYVRW9G2pPlgoaLxNKs0d0Y2g+/8HOEAI0QPNndEwqGfAngYXLuv9Zm+9K0pbywRNNRaj48rwuPLT5RSnbzR5O4tu7NtUGy5qYFZnvF1VvylkLF8B47Dj2RgvLJvjiW3b9wtbf3DQmQvzQ6rIy/2bq/dPNmSnYNbbt+apstcPHGDtskhB+KSk/zQS+d3TLLBrdkdkrseAY1sf+p3zgEnz6pN3e9rjI+NEE0mS4ykQQfrPIJELeb200hH7/awjyL7nXRR8KL16qCHGkXW3DQxGR3h+7df82TfkphTJ/BoQQRuXovUPTk3hOGnTOrC16rwByCwyvuAAtRVOzvXpC1eLwgXB3OiCyMWptxjLOG+67Nc1gLvC+ZbJe0rGJtJF4YigKpjBsznT4QjLCattGmfGl1J6eS2taeCTj7XcPJ+thEBd01hsiW3S0opoyfyvLb7JyrYGQJgRnJkTe/rRFk58uiJjAtZ/fpyjXb05cNeYhbl1ETUBtG4BxjGLbdD5fgZYWwnzmgoXKlQRINRcm72OJMYKwid/ZegSCGjNghZbhRpfL34Z6u2LF4VjLMAgQ5chnbzH9ps0Oe4QTSQBsCxD1YxgNjaRSjOSTGX6pbgZH50WjhgwFjoaCdri7t8l9cnJEDv3fwXjMR5bNJcDH7yYjX13oodV249MW3YPHAtjAlGDyhVfJQhU4tz7HFTUe2NC2XAxBhW726i7AvqTXYEz9xkIVOU0q1I+HAsTkFOmv7LmV3xOg2tiBlr/gKcC5cIRK3G12/xsMgfIQ74N5BCnNpUDN2AHD3OsLWUAnLTZgXuG88nPNyBlwcWIk06zDTIbUOb0+mV5Vcg34HPkYlAJfDuw96mTWQPun9R7wPC/44tvOMZOWpWhtbe5GV3b3NArKq8ApTeGQhXwAxdLsey3/t65rHvKnblq7oyGUdkwHa6lNsEbD8eyKc79EWHfj1dKwA1Ywe3Xd7etybOeL5XmztgGVNYXjmdujPcig11uYj8jN4GPr+95fA15W2/xD5N18eWIfgGEippI/IUM/lZyzsXYq67tbttVKEfRY1jfluqDltr3q/IZkC7UR6vm4NzZWvhVE6OY4PcSDLUWg09bgalq6kgsNDirHWgXqPN0GL6OGbrkwi07rlJxWEU/6t/zxKlSucs7CoTVbhqLLTGOWayq9ynUZ5LckmjPgE4Mne3r0eMca/P9ef4Phg2m6Aa+DR0AAAAASUVORK5CYII=",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAPzAAAD8wF1XGupAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANJQTFRF////AG22AIC/AHW1AHq4AH27AHq5AHq5AHq6AHq5AHq5AHq5AHq5AHq5AHq5AHq5AHq5AHq5BHy6CH67CX+7C4C8DIC8DYG8D4K9E4O9Goe/HonAIYrBIovBLJDENZTGPJjHP5rIR53KTKDLUaLMWabOYKrQa6/SbbDTcLLTdrXVd7XVhr3ZiL7Zib7Zl8XdmMbdmcbdo8vfpczgps3grtHisdLjs9Pjt9XkuNblvdjmw9vn1OPr1eTr2Obs3Ojt4uru5uzv6e7w7PDx8PLy8fLygYYNQgAAABF0Uk5TAAcIGBktSYSXmMHI2uPy8/XVqDFbAAABIUlEQVQ4y4VT6ULCMAzuBvQYY1sU8Va8L2Qq3k48+/6vZGy7iWSj348czdc2TRPGKgRcRXGaxpHiAaNoywQqJLI9Fw5FBv+QiXA23uoCQbf1F+/0oAa9TrW/No4Md0Zoz19ZorfYPIRxxp9vR4QhzPtM/lvfWr8SQvb7WmnMwYfWDzQNifVz9dm7GW9TQhIwDgvBmbJGP8/zc1hHeTo4nrxc7ziCYpE11rTWz7CJ8vEJhf46tOsRi+cJDtO+WY9ZSgi3w7N3VPtmPaWE6TLACPWJI5Ar7tE7QD1yV5Ak79Abor50SarFBFUWqonAy1I3ELDU7rMaCLL67tWiKCawgfIKvV3UF+V3u4aphZhtuRq4lvM2rb/t/YPjHz3/8DaP/w/O0lQZAu+37AAAAABJRU5ErkJggg==",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgB7ZU7DoJAEIb/JV7MBq/hCVROIJ7AqI2t0d5WsTF2dhzBI1hbsLIYwyPADgzrFvI1PJbk+5lZBoEaNq6cR4APA0wDIdTRgQV5lgGI8skZnbAe5a8ditwkjk15LoANeS5AW7nqabGvdfcrA9iiD9AHsB5gACZVI5o6uv+rBbct7AW4H4Dw+DmPp+7ipwGU/L5P5V4g/O8aexM2kkusvEsqVxitQOHNd7F8VnyGXIHiny37mWVFZSTyQIzL1tgV0MljQrwwq1pkBaDIoxeG3lU80XUAgvyhk/MC6OSOXs4KoJWfxIPysACRlSslV1YGpwIhV65oOwlDygYzEqBuqLShUQuSWd6hvBFLV/owwBuAI3t8NBey8QAAAABJRU5ErkJggg==",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARCSURBVFiFvZdPSBxXHMc/82azs1k3JiFYL+LWSxLUVLBQDwuJf8ihRhESEpBcAslF8VAikUBIIPf0kJMJeDCHkBJSQTwIra2QQ3vIIWGpegopKOgY7a7j7o47ju/1kOyw4/5RN5gvLMz7vXm/72d+8968txq7FIvFLgcCgQe6rp/Vdd3QNG33LQeSUgrXddPpdPq3ra2tB/F4/J/8fi97W1tbdSgU+isYDDZ9qWkpJZNJadv2qJTy9tzcnOMBtLW1VYfD4X+PHDly8lCcP0spxerqKlLKP6WUP87NzTkCwDCMvw/bHEDTNILBIECnEOJnAC0Wi10Oh8O/HlbZd8uyLNLpNMCOEKJFBAKBB1/LHGBnZyd3qUspbwpd189+LXOlFI7j5IcuCiFE8GsBWJaFlDI/FA0IIUrW/8mTJzQ0NHjtVCrFyMgI79+/L2ly/vx57ty5k5tsKKW4desW8XicbDbru1cpdUyUI3769Gn+OyMSiXD16lVM02R5ebnor6+vzzPPPcSbN28KzAFc16UswNu3b3n8+LEvduHCBaLRaNH76+vraW5u9sVGR0dL5nccpzSAbduYpsn4+LgvLoTg+vXrRcf09fWVNNstpRSZTKY4wObmJslkcveE8RmdOnXKF9M0je7u7n0D2LZd+AqUUiSTSVKpVMGAd+/eedeGYXDt2jVff2trK1tbW/syz2azWJYF4AdIpVLYtl100LNnz3zt/v5+jh496rV7e3uZnJwsa5wreyKRQCnlB7Btu+iT5zQ7O8uHDx+89okTJ+jt7QU+VaSrq4vp6emiptvb26TTadbW1tjY2PDMfQCbm5tl6aWUPH/+3Be7ceMGQgja29uZn5/HNM2CcSsrK6ytrWFZFq7rFvQL+FT6/PVeSpOTk6yvr3vturo6Ojo66OnpYWpqio2NjT1zFAX4vDvtqWw2y8uXL32xgYEBWltbefXqFZlM5uAAjuOUXG7F9OLFC99EPX36NDMzMyQSiQObA4i9lk7u49LZ2QlAMplkamqqAKpSiV3bo0/RaJS7d+8CcO/ePSKRCADj4+Ne1UzT5PXr15UDlJp8hmHw6NEjqqqqAKipqWFwcBCApaUlZmdnAZiYmPAm8MjISEGe+/fvlwfIX5P5unTpEmfOnPHFrly5gq7rAIyNjZFIJLyl2dTUxPDwcEGeoaEhGhsbSwJo586ds4BjZTHLaHl5udKhaJqmBLBYcQYgEAhUPFbXdUcopX7/EgDDML4EYF4IIcaAvT+DJRQOhysGEEI81E3TXK2trf0G+KHCJN6GcxCFQqH40tLSTwJASnkb+KMSAIDq6mrfOXAvBYPB/44fPx4D0AE+fvy4U1NT84umaSeB76H8WbGYwuHwvioRCoXikUjku4WFhRTk/TvOqaWlpUlKeRO4CHwLRA4C4roumUyGbDaL67pomqZ0XXc+T7iHi4uLvlPL/2Ea1+blURMCAAAAAElFTkSuQmCC";const z=i.article`
  margin-bottom: 8px;
  padding: 0 12px;
  border-radius: 8px;
`,q=i.div`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`,Z=i.section`
  display: flex;
  flex-wrap: wrap;
`,_=i.a`
  padding: 12px;
  width: 92px;
  height: 82px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all .2s;

  &:hover {
    background-color: #cccccc44;
  }

  & > div {
    text-align: center;
    color: #D9E4E6;
    font-size: 14px;
  }

  & > img {
    width: 28px;
    height: 28px;
  }
`,$=()=>n(z,{children:[e(q,{children:"Links"}),e(Z,{children:[{label:"Binance",icon:X,url:"https://www.binance.com/zh-TW"},{label:"FTX",icon:G,url:"https://ftx.com/markets"},{label:"ByBit",icon:H,url:"https://www.bybit.com/zh-TW/"},{label:"MAX",icon:N,url:"https://max.maicoin.com/"},{label:"MarketCap",icon:x,url:"https://coinmarketcap.com/zh-tw/"},{label:"Francium",icon:y,url:"https://francium.io/app/mypage"},{label:"Raydium",icon:k,url:"https://raydium.io/swap/"},{label:"Solanium",icon:J,url:"https://www.solanium.io/"},{label:"Youtube",icon:L,url:"https://www.youtube.com/"},{label:"Facebook",icon:O,url:"https://www.facebook.com/"},{label:"Linkedin",icon:Y,url:"https://www.linkedin.com/feed/"},{label:"Twitch",icon:K,url:"https://www.twitch.tv/directory/all"},{label:"Trello",icon:F,url:"https://trello.com/b/2ebe3mcu/chris-lin-%E5%BE%85%E8%BE%A6%E4%BA%8B%E9%A0%85"},{label:"Medium",icon:S,url:"https://medium.com/"},{label:"GitHub",icon:T,url:"https://github.com/ChrisLin1997"},{label:"HackMD",icon:W,url:"https://hackmd.io/?nav=overview"},{label:"LeetCode",icon:V,url:"https://leetcode.com/problemset/all/"},{label:"\u6398\u91D1",icon:j,url:"https://juejin.cn/recommended"}].map(A=>n(_,{href:A.url,children:[e("img",{src:A.icon}),e("div",{children:A.label})]},A.label))})]});var AA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEVHcEz/miT5lRv5lBr4lBr3kxr4kxr4kxr3kxr9lxz937z6w4D4pkL++PH////+7Nf6tGH80Z1gLiRMAAAACnRSTlMADz9ehavC4f8dTtIi3wAAA9xJREFUeAG804mBBFEEBFA0VSX/hDeAnfM38wJwsyMeVxZAUiIJVF7h9hMeCeohIreriITeQMZeduozGzV0Ul9gtk2K0tcq5tJDRxD76fdL6NIt1XbLpbuYdi6oAQw7lBqSdqKhMej98U+vITXoYA2lcWWfc2gBfP/8ZipoagnbPuDUGvr8/se3AK3C/P/NfmNq2R+t5oH0OAhD4QQ3Amrc/7BbwraM/dtPMvumepo16EMNXUSklJ0qpVJ2Ko28gCwiXOqoy+gGkKSLxoDoB6DKW/r+MNgdMwYAoNINaO+P1t1BYQwCEZC7Afb+0P7REAxwBzgQkC4LOuGVu+IISFeG9IqFwKbN6ASBbg2iJURgdzM3IxQBnEMsBMhvaTOKItC1Rg7A5F+xBhHoSoEDaHKk4kWgaw3EIJUD9ejjQqAr+asA+VrsQaBr8ceAWlgulB16RYIgVZUzNcqw5mAWMDmVVrgwiKbBKufiimIYTUNyJTWXD7axBuDXcQsWIvRJ3fHdUNwHc77DgO3vBm7BHCtFy9HFp8b7EA2F42ewEOvSk1QBXIbnfQQ+IgR7nZAGIHBigQEQ3EXgNEY1CIJtEAJd7MNwAxiEEdiXDIpQmEYh0FXcFE4jEIifwPSYhyJA3lA0P5ahCDRvJFoe60gETD5ESDBe7yAgn61a86ej1R0G+KAqb9Ws7rNyhUqCLYYAIM3/w4AqqJgwA+IIAP8H9IggAKhkUI8tjsCXxnAxvDfY7kQB26GP4Y8bACQCawcFKeEGrAMSwb4gZXxQso5JBDUQhboBy6BEQE0+ZeCQYI4jcJ6JFGwPp2G1QLaAE6ZHiiOwU4l0h88wApeZijLUGm1xBHZiL4Yb1JiQNtv5WK/neIZ1pzM2n9RSrrse9lHYW7MUy4B2Xa0Y1pw+YzUIMMolhEEAAkXrLfo8KkbnxXNkLMha7fz/UtARTQoXYeWfotxaoCpIwMIAyYVYS1ENjY03aFDZx3B+NcgDiA+CRhDmAXxU6jSiAR7wj+upjGyL5sCjJWoAk+/xcnFWJK3p+f/N+XaZ/I/FVL8+DSX3u93qqkj4NEJoDbxcpsC+QP39v1b434lF7O129SBQ99YQmRlRfI8j+fcFGM760BLFEkWABu0zvaII5JBe+AoxhMCQdaptPAIggc6kOACBdGORiWq9jcA8YpXrBgIrsMwGlwcW3ywFMACMoGEAfG/eDq4AgAAYigGw/8Km6IsV2uuPDxp90umj1j+y3nJB2EzSbvDCqj7v98DBEw+PXDzz8dCJUi8wQvfcz4NHTz49epXsF8DnHcPXNU+/NX4H/P8BC2PKINdSx6oAAAAASUVORK5CYII=",eA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAHlBMVEVHcExifutkgOxifutifutifurAy/b///+Bl+6hsvK9JwfqAAAABXRSTlMAuT/fhRZUC3MAAAOZSURBVHjaxZsBsuQgCEQDKoH7X3jr79QWOz9mBmhn7AvwQqNR0aMm5k5ErbUxWmtE1JmPL4k7tTFVo86fDz7e6IMQ3NuIqfOm6K62mIFppEW8ODyEgIffh0ADEoHh+4DVkey3sUCNwc/H1UH3cRGaflwMpH+LDTSWiz4V33Q9Qcr+U8Lj8SPlJ6cYQAB/v56nyAAIwPhDfgAMIADr384fAFFgLGDj73wACDAaoflH/gHYohmJR0p6PgBSJgxeN/+fDmAjrmUFYA6QSgHBBeAJcADBf0w8cpJnAIN/zi1rgANkTWjLDHAA3ISsAVcAhUYCFaYABwBGAlCBDgDUITIFOACeAi5UoAO4yimgggEOUDKB4J+QA9RMYDQBDoCnoFCBLsFT0AEDHCBdh72+Dr0HKK1QGUiAAxRM4JID5zsASXsAVOAUQJMecMkAl9RTwHkHJAJgOQ8IMGAOILkdO1CBDlA0IVsCEgWwRBH0TAVGASRRBIQmwEop8CJoaAWqWrkOW6oGb7KvOkWIViEXDXDz9a+sZgLHAfQS3QGmDBoD6CUDngK5LJ2CfhCwEHeAKYKGhgEBOyEHmCOsBJAXE/9vmcVNoKNlDJCZdCKLmtCCAB4+AuAIqwDEw0cAHMHeA8QqUF5Ib2X2PgUhAJEkgOttCmIWWBlgVRFqDWDEihBEKIV3ABqumg9AfJ8JQ1JLAAwXDqAvfSiFd4Ae8l/dhwhAvKfXD47NhHZfCi/Ci6ErIidwBH0N8P+4scjGILwccB/0HuC5YiOL0sz/WKY+zLMf/RsfuRWJTYbkNPvR9Uhia3Y+dPXhJrxIcGvGyWX5ZUhes/9Q+IQi3yJ5jjUPLxpuG1B6a/Q8JGfZF7H4AUWvNCnUQ+r0Z5E4ouERJ5ghzMdm5qCw1fan9mLBYKmj0l7doetNeLHcQSWXD2lE5ysFTR6Xt/o5nbj5Ls22LztyUGYqv2T57uWew+rDRTuO6+lw8cqGRalvRwBBKb4nAD+yB47qqymwewCtdq/5251Thtr3eO+YwAsMOgcYYcFXOAy7wNAPF9y+BFqWSB3qFQC+zdVrBLABLvrORSZadZnNAZACwMug1LJ24WMRLAC8DMACwKdkbArGrxWfyYY9QIDcK/b46wmg+DiBApfbN1zv3/rAYfcTj72PXBojb8xwtd0PnXY/9dr92A0TDUi0+8Hj5iefux+9LhX87BcX97Y8+v6n3/sfv29//v8HwRsN0ET2sBAAAAAASUVORK5CYII=",tA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAJFBMVEVHcEz4wTP1vDH0uy/0ui/0ui/zui/53Jf////54qf30nf657dmMGbiAAAABnRSTlMAF0KFsc7rh3WQAAACnUlEQVR42sWbQXLEIAwEDUhysvz/vzlOhVRko7FrdNtcugMC2yAdpWi9DzN3j4hwd7PRezteDbCHxz/h420LwCOReI8eN+MNhzY8NsLHs3PRLbbD+sN4mUL3KIfzCs2CCiNzYQQdQzP6/Dzg31cNQvN4LLwVhj8ejU4Mv2QaLB4PYxc/b9AE6VdIRfAFBuBLDMCXGli8GrbBlxiMeD3Gs/vveT65K7d9/tfXvsH/iegFfsHA+QQAHwZ8GvQKHwZ8GniBXzRwbgLAhwE/CY3gw4BYCVbgEwZGZiD4MODy0At8ysCJAQCfMeiVDACfN7DSAIDPG/TKAIDPGxj4jeATBg2bIMEnDAbWIMEnDBwpWOd/f5cNkIaD4EeUDTAHFJ8ywAwQ/KoB5mAQfMIAc+AEnzTw+7vQJ+PDAPGJO7GRAvMvPzOY95NgRMEAfBgU+DF2tsG58BODubMZxu2YCR8G4N+JvSfhBD8zmFtPxB7bBuCvBtv86JcC5y/cXPlzrga//3BeCowL/gpcfq7A5efljjQOu+IvBp+Fvxh8Fv6VgR2W89NJn0i6JCnPXMBzPgySZTkzfm7gh6d8GCR8GCx8GBQEwIfByk8MwM8N/Mj4iQH4MFj49wyOhJ8YgA+DhJ8YyAXkU6BOQv0ylG9E8q1Y/jCSP47lLyTyVzL5S6n+tfww5YeJyT/N5B+n6s/zpj6gkB/RyA+p1Md08oNK+VGt/LCaP67njuvlFxbqKxv5pZX62k5+cam+upVfXquv7+UFDOoSDnURi7yMR13IpC7lkhezqcv51AWN+pJOqYHJy3rVhc3q0m51cbu6vF/c4KBu8VA3uajbfMSNTupWL3WzGxHydj++4VHc8iluehW3/cobn/Wt3wIJI5rfZe3/P1oiPn/e10XOAAAAAElFTkSuQmCC",gA="/home-page/assets/sol.b6614530.png",iA="data:image/png;base64,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",oA="data:image/png;base64,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";const aA=i.div`
  padding: 12px;
  height: fit-content;
`,rA=i.div`
  margin-bottom: 12px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,nA=i.span`
  font-size: 24px;
  font-weight: bold;
  color: white;
`,cA=i.span`
  color: #848E9C;
  font-size: 14px;
`,lA=i.div`
  padding: 12px;
  display: flex;
  height: 60px;
  align-items: center;
  font-weight: bold;
  border-radius: 8px;

  &:hover {
    background-color: #2b3139;
  }

  & > *:nth-child(1) {
    width: 5%;
  }
  & > *:nth-child(2) {
    width: 10%;
    text-align: center;
  }
  & > *:nth-child(3) {
    width: 30%;
    text-align: right;
  }
  & > *:nth-child(4) {
    width: 27.5%;
    text-align: right;
  }
  & > *:nth-child(5) {
    width: 27.5%;
    text-align: right;
  }
`,I=["BTC","ETH","BNB","SOL","ATOM","LUNA"],dA=[AA,eA,tA,gA,oA,iA];let d=JSON.parse(localStorage.getItem("cryptoPriceMap")||"{}");const sA=new WebSocket("wss://chris-binance.herokuapp.com");sA.onmessage=o=>{const A=JSON.parse(o.data),t=B({},d);I.forEach(a=>{const g=a+"USDT";if(A[g]){const r=A[g].close>=A[g].open;t[a]={name:a,price:`$ ${Number(A[g].close).toFixed(2)}`,change:`${r?"+":""}${(A[g].close-A[g].open).toFixed(2)}`,percent:`${r?"+":""}${((A[g].close-A[g].open)/A[g].open*100).toFixed(2)} %`,isUp:r}}}),localStorage.setItem("cryptoPriceMap",JSON.stringify(t)),d=t};const hA=()=>{const[o,A]=l.exports.useState(d);return l.exports.useEffect(()=>{const t=setInterval(()=>{A(d)},1500);return()=>clearInterval(t)},[]),n(aA,{children:[n(rA,{children:[e(nA,{children:"Market"}),e(cA,{children:"more"})]}),I.map((t,a)=>{var g,r,c,h,p;return n(lA,{style:{color:"white"},children:[e("img",{src:dA[a]}),e("span",{children:t})," \xA0",e("span",{children:((g=o[t])==null?void 0:g.price)||"--"})," \xA0",e("span",{style:{color:((r=o[t])==null?void 0:r.isUp)===!1?"#f6465d":"#0caa6e"},children:((c=o[t])==null?void 0:c.change)||"--"})," \xA0",e("span",{style:{color:((h=o[t])==null?void 0:h.isUp)===!1?"#f6465d":"#0caa6e"},children:((p=o[t])==null?void 0:p.percent)||"--"})," \xA0"]},t)})]})};const pA=i.div`
  margin-bottom: 24px;
  border-radius: 16px;
  height: 310px;
  overflow: hidden;
`,wA=i(b)`
  & .Cal__Day__root.Cal__Day__today > span {
    color: #efb90a;
    font-weight: bold;
  }

  & .Cal__Month__rows {
    background: #474d57;
  }

  & .Cal__Month__row:first-child li {
    background-color: transparent;
  }

  * {
    box-shadow: none !important;
    color: white;
  }
`,PA=()=>e(pA,{children:e(wA,{width:424,height:330,rowHeight:50,selected:new Date,locale:{weekStartsOn:1,weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"]},displayOptions:{showHeader:!1,shouldHeaderAnimate:!1},theme:{accentColor:"#efb90a",floatingNav:{background:"#181a1f",chevron:"transparent",color:"#FFF"},selectionColor:"#efb90a",textColor:{active:"#FFF",default:"#FFF"},todayColor:"#efb90a",weekdayColor:"#efb90a"}})}),BA=i.div`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`,IA=()=>n("div",{style:{marginBottom:"8px"},children:[e(BA,{children:"Weather"}),e("iframe",{width:"424",height:"246",src:"https://embed.windy.com/embed2.html?lat=23.536&lon=121.023&detailLat=20.303&detailLon=121.531&width=424&height=246&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1",frameBorder:"0"})]}),CA="b59f562da5497d300e7edef0d1f4a556",uA=i.div`
  height: fit-content;
  overflow: auto;
`,EA=i.div`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`,bA=i.a`
  padding: 12px;
  border-radius: 8px;
  display: flex;
  transition: all .2s;

  &:hover {
    background-color: #2b3139;
  }
`,fA=i.img`
  margin-right: 12px;
  width: 64px;
  height: 64px;
  object-fit: cover;
`,DA=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  overflow: hidden;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > *:nth-child(1) {
    color: white;
    font-weight: bold;
  }
  & > *:nth-child(2) {
    color: #B7C2CB;
    font-size: 14px;
  }
`,mA=()=>{const[o,A]=l.exports.useState([]),t=()=>{fetch(`https://gnews.io/api/v4/search?q=\u52A0\u5BC6&country=tw&token=${CA}`).then(a=>a.json()).then(a=>{A(a.articles.slice(0,6))})};return l.exports.useEffect(()=>{t()},[]),n(uA,{children:[e(EA,{children:"News"}),o.map(a=>n(bA,{target:"_blank",href:a.url,children:[e(fA,{src:a.image}),n(DA,{children:[e("div",{children:a.title}),e("div",{children:a.description})]})]},a.url))]})},UA=i.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`,MA=i.div`
  padding-bottom: 48px;
  display: flex;
  justify-content: center;
`,vA=i.div`
  margin-right: 24px;
  width: 768px;
  border-right: 1px solid #2f2f3d;
`,RA=i.div`
  width: 424px;
`,QA=()=>n(UA,{className:"app",children:[e(v,{}),n(MA,{children:[n(vA,{children:[e($,{}),e(hA,{})]}),n(RA,{children:[e(PA,{}),e(IA,{}),e(mA,{})]})]})]});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(o=>console.log("ServiceWorker registration successful with scope: ",o.scope)).catch(o=>console.log("ServiceWorker registration failed: ",o))});f.render(e(QA,{}),document.getElementById("root"));