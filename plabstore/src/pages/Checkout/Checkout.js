import React, { useState } from "react";
import { GridContainer, GridItem } from "../../components/grid";
import { JustifyBetween, JustifyCenter } from "../../components/flex";
import "../../assets/css/checkout.css";
import { TextField } from "../../components/form";
import { Button } from "../../components/buttons";

import UseQtyHandler from "../../hooks/UseQtyHandler";

import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill";

function Checkout() {
  const { value, addProduct, removeProduct } = UseQtyHandler([
    { id: 2, qty: 10 },
    { id: 5, qty: 5 },
  ]);
  const [sizes] = useState([{ size: "S" }]);

  return (
    <div className="checkout px-lg-4 px-2 px-md-2 my-5">
      <h1 className="text-center">Shopping Bag</h1>
      <GridContainer>
        <GridItem lg={8} xs={12}>
          {value.map((item, index) => (
            <div
              key={index}
              className="checkout-thumbnail py-3 px-lg-3 px-0 mt-lg-5 mt-3 "
            >
              <GridContainer>
                <JustifyCenter>
                  <GridItem lg={4} xs={12} sm={12}>
                    <div className="thumb-image">
                      <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBQYGBcZGhwZGRkaGiAXHRogHhwZHSEZGBocICwjGiApIR0ZJDYlKS4vMzMzGiI4PjgyPSwyMy8BCwsLDw4PHhISHTIpIikzMjI0OjQvNDIyMjIyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xABIEAACAQIEAggCCAEKBQQDAQABAhEAAwQSITEFQQYTIlFhcYGRMqEHI0JSgrHB8NEUJGJyc5KisuHxFSUzNUNjg7PSRKPCFv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACYRAAICAgIBBAMBAQEAAAAAAAABAhESIQMxUQQTIkEycZHwYUL/2gAMAwEAAhEDEQA/ANED0YNRAKMoq7OdCgoZoooYoBArjRorooWGhOK6KORQVrNQEUIWhAot25lGilidgPzJ5Cs5JbCo26QeKAio69x21b/6nZ1jQ5v05VJ2nV1DIQysJBGoNLGal0GXHKPaEiKAilytBlprEoSo6ijZaMqVrDRyihrgtDFAYCuimHGuNWMIqtfuBcxhRuzd8DuHfVOs/SNYDl7lxwhYgL1RZQNIOYazHnWs1NmgxQEU14TxWzibfWWLi3E2lZBB7mU6qfAgU8y1jBDRKWy0Vlo2ChOitSuWuKUQDc0BpZkpMrWAJMtJMlOIrilMmK0NClDkpwUopWjkLiJBaGKUigIoWNQmRRStKkUUrRTFaEytFilCK6KNgoc0YUMVwqTZZIMtGoooaAwNdXRQxWMFoKMaKTQsKOmoLivELvWPato2UIWNzL2RAbQtyOnzqZJqPx2GYrcAY5WVjlGmpjY5h3c+81Lltx0W4KU9mb8Va9ldnW4NM0uIzDkw79Pyq0fR1xWQ1knQ9tPP7QHyNQHF8Q/UlbjyQCq+AOgFJdFUNpMNcDAnrSh8IbKQT5Aiubjli7OzmgpRo1+goCa4mu48wEUYUQGjCsYNQrRa4msYxXilgcQ4oevBtortbMESVV2UBZOmwPq1RHSPgtvD3RatXC1tiqvmykjX4hG1XQ4a22JuPcUt2+sWGAIdWZocjeRpHp31WuJWLBtEqX605usBPZG5BAjQ/wAK45cjyPRhwpwI3oXxy5gMaAxy23YW7yfZIn4hOxBJI8yOdegsNfW4gddj5H5gkH0rzFjrwIQFZIUFmOpYEAyefd71q/0NcSDYe5YLElHLAHXRu7ll28iT3iumLOKca6NLoIriaLmphBLEMxIVO6Se4T+uvtVL47iL9u4W+zIAA375kHSrdirzqZRAwg5iTGXKCRpzk6cqqPFkvFQ117RDCQEmde/y01rm52zs9PBMl+ifGjiFZHBzoASToSD3+IqeZazXo9jXtYnsCRk7U6yuY7n8JP4fGtKt3A4lTIqvDyZR32R9Rx4S10EK0AWlCK4LV7OehMrRGWnBFEYVkwNCBFBFKEUBWjYKE4ohFLFaKVrWZoRiuilYpIv4flRckgKLYbCcQt3CFXfLm8tYI96eZaxfo50ga1dVmOk9rbadRNWzi/TC4Hy23UqGDK67MpggEesVyrnSWzs9hyfxL5Fc5gEnkCfaqHd6c3DJS2ANPHWNY1pE9O7twm31aqSDrrOgkic2mk0fei+gexJdlq/4/p/0rhMnuA/OZp/hMetzQAqwE5W0MbTWfY3pBdIxBtkotvCF1BgkOHjMPIEVbuChotsTLOkuY8J09YqcZyvY8+OKjoksdixbWSCZMADyJ/So21xuSFNtl1Ak66ayT3bUrxUHMhk6K5jlIy6n0JHrVN4Pjbt65YW5cJVsMlxhpqzG7r8h7UZSkpaBGEcdmgFqb4wjIcxAUatOgy8ySdoGvpXYcnIsmTA179KbcRTOhtlWKsIbKJkHlJIH51WW0SivkU3jjKbYayOukjS0mdhsR1hTspuPiio/BO1r6tkZO3m1dLsMQD8Sbd0NrpUtxVrWHVER7ts3Ltu2VFs2pV3AY5khZyhtRrpQdJ8Gnw2rSW2tgm2UUAzuRPPMJBnvneuVxSR2KTbL5wzE57anwH+3vt4RTsPVd6JYrPhUM7T89R8iKmw9dcHcUzhmqk0OA1GzU2D0BenFHQeuBpqHpZHrAsy/pDebAYm5cKB0dQQJKEqxjKI2uK+s6kgeNUvi+Je72gVto4zQSS0H7xOv8ZFah014vg7D5b9vrrt1YFuFJVQCJk/ACZM7791ZNxG4zBnntTJjTc6gDuqHtrK2dXvSxpDLE2w9oXFZQUC23UsAx+LKyCZZYAB7j4Grp9EuJdbzKqkqwGaMu86EzEDcaGZI5VCWujSXsL1ti6Ll9VzvaWJC6yAN8w0PcdYqxfQ3bHW3WJ7WUQCNYMyR7DX/AFprT6A00nfg2PNRWaky9BmpyATF2esRkJjMCJ0O/mCPlVFx4NjLacuxYxbzLoATAEwNAfXWr5mpDDXEe43ZUm0QASJIZgS0Hl2cvualyQUjp4OSUbpa7K/wfgxsXGzESUAjWTrJPkTU5gD1Zjlt7Ewf331nWK6Wu2LvTHVrcKhokquqaDnPZOkfDzq9YC8HVSCDKqd51I7Xzn5VBfGWi/NxSS+X2ToaaEGmeDuaRSxautO1ZwNUxeaKaTz0GajZqDGgiiC4JiRPdNJ43Em3be4ELlVJCLEsRyEkCtYMRvhuJrcxF3DhGDWlRmYxlOcSI1mlMdj7VrL1j5cxhdCZPhArI+G8b4hZxJxV6xdGdgLpdGRSo+x8MCANIBitRfHWbhFxBmOUQcpkTrALARuKGQ7hRG9IukbW7Y6lCXYwM6kECJzBTy8/aqbixj2KstwSVlszDeTt4RHrNPOkmGNy/cdrmRBbLQm8rA7bfwim2JxNrOf5zAEAANoNB93TeaRzb6HjFJFFV9aVS6ROtNidaFN6nRozaJfDYgQVJ1jT+Pzqc6OYlWvWleI6waHXkQPHWaqpbtaeelSHRyw9zEpkJlWDEgCRqBz849alKFKzohyXo0rinA16nEC2vbu23RY2E9oKPVQKkuEYtQloGRCanlt4TTt01MEiR30wxYcJaNvtMito2xlSoJkcjr6UkZvthpNUOeI41CwA1OR9vGBz8qqvBcO1u5ZLqRlw6WzqD2kLyND/AEh86snRl2kW8Tbtw2gIXUjQS5BiZgcqtrcIs7rbQNBAMbTVknPdk24w+NFetXB1YI1EctT7CoLijBQWuLdG5zwtwKYnZSXUTGx9RSvFuMC2wtsFthswLAEZcp7RIHPWq7du2Lh+pxaK5MBWm0Tr4aNr3qR85o3aFhGnshuL4m7ce0BdF2zbvW3JV8+UKzLMHtgfGdc3KDAq48fMMpqoPeuWG7eFs3ixXK1y3maTCgLcXsknxyyWAq/Xs98i3Zt2bjCbbNk0DISlx5nsjOrR6b0klaK2lKwOjdk21ZPswrL65v0j51NB6V/kyYa2itD3MqjX4RAiY57aTTf+XP8AeA8Aqge0RXRFUqOObuTYpnoGenGDKXjlYBWiVZRE+BXaedNcXYe20N6HkfL+FMmI0D1lHW9TMvTjAYVrrQNFHxN3eXeaLBRW+OdG8LxAJihnW4bcKymJIkLnXWYPcazq3wG49m4zg2gsj6wFJgT2ZGutbiMtkC1akKgyljq7Eby3n3c5rMMT0hv4W5i7bXXuEXWZVusbiMh1yFXJEZSIqLtHTCm99FU6C4o2sag++GQ+2b81rXuj+As2yxRFUgsdhPbOYwdwMw2220qN6A2uF8QbrRhLdrF2tXRCyKQZAuIikKVOxEdk6HcE2LHXhbxjKqrBtqACNBAB0HKt92Zu1Q8L0XPUvgsOjorFFkjuqO4k4tuVVEAgHaTrNOSEXugAk7ATVb4Zj+rsY24WkpdudrvJRDp6ml+P8RFu0yg/WOpW2ImWjSeXvVcu8Q6nAvcCIxvXmbJcUOsAAarpOqD3qc3s7vSwcovw2l/NlEw93VyftMv+aaunAeLlra2gxLWhowPbnU6g7ExG50imeF4mDhrd3+SYMOcSbZIsCAoth5Cg6sNa2HD9GsGmq4W0pO8IBU3DIt6nnTSTXRVeifGP5TbdjOdGysCIOoBBg7bkehqeZ6o/CeN9XxK/hxYsJbNy4gKWsrHKzZS7T2tmHmfMVZb3Sa1bYKUS5ImE38OfOqxkkjg5IOxxxDHdWmc66xApvwzGvcL5jEQANDuJ3FWDBphsTaV1RWU8mGqmNmHI6/Os06LYxVw9x7jFiGJY6roB3k+fdU+WTirQeONlnxjraPWjVgGJnWRMnT+FQnSjjFxraFWa2l21KkNlEkhhmbSOyDz76jcd0swbBsmZ3QanMQsGZyszQT5A86hrnEbd1ldy11gRlRRmCKV+FSfhhjuI2pIZ/wDropLFddiuK49cxH1dztlBmcz2WE6mQJg+Wvzpa8+ItpcVrmTstdOXnEKF27AAGwmBUN1zZ30W39UgY/GzLLCdOdSGPBb4mLTZZe6QSD2vHyqtk2KXBbTMWk9i4O08KfhJVydSWgexqv3MBlOjSD2hG0Hu1ptjcK5uOS0jUiSToeQ/3qQxln4AHYAIB7E1kqC3ZAIYJB3mnEjnv+vcauFrhtkgfUp7U5ThdiB9SnsJpLF9tlHS0d99Yj+FaP8ARvwdRnxLKVB7CZtSNVJPLnApkuAtKQRbQGY0WD/pTyzjrgTKjuAOUkd3KknctDxjRMcU6Q9Sbj/EtuWgSCQM2k+2vhTXpNxdhgrVxJBuZWKzD5CrMcsaxMCR38qY3rYf4hObedZ8+/c0hiXJUW2JKAQEYyBpGi7DSgoIeykf8cvC5mS42jZhJJGhB2PkPavR3Rriy4vCWcQsfWICwHJho6+jBh6VjKYG0QSbaf3B3VoP0c4tV63DABQrG4gGg1MMAPPKfxGrQpEppvbIH6VU6pswY/W6gdwAGePXL/erJcUZFb39K3CutwJuKO1YPWfg2ceUQ34Kw/AYUXH7QlQdu891PqKEScmkPeiJupe6xmYpZtvf6snNLLAtrl72utaG3M1vXQvgZwmES05m4Ze6ZntsSzAH7oJIHvzqg9DuEoblkZMpuXQ5A1Bt4YZxofhBuva8zarWrz5VZu4E+worexp2nRSsRjOtd35F2UeSsVHyWfWk81Y/xTEnrG7R2HPvAP602S4Su596Cm6A+NW9m12r+VlcHVSD7cquWKw63UynYiQe7uIrza+48q9BdEL2fA4Vjv1NsH0UD9KKlYrhiV5kIfq9M+bLE85irfh7K2bcD7IJJ7zEk1WbnBlPGVvRp1HWfjB6vX8JB9Ks3FGizc/qke+lG7BVFU60nUnxrL+nhm+zgQGCie8roT7EVozvVB6eRCiZOaTptpEaeVD7GXTIb6NMabPEFcEwqtmH3lJUEHv7/MCtY6Q3gMZmkZcqmZgQV3nurHOhafzvyRj8xV+4/iS9m6zfZslfMKhAPtSyexoq0arwW4GsWyCCCNCDIOp51Wel/F7Ni59Y8HKsKO03P7I1jxqQ+jr/ALXhP7Ifmay76X/+5H+wt/5rtM2Ilbob2uMvicUGaQqg5V1jQ6ad+tLdM2yJYs/ctyfNjr81PvUf0GsZ707wBPqwP/8AJpXpvezYoiCcoVdATpAJ28zUpL7PS9JLdeLZH3LhHD0KGCcY2pJG9hR9nbePOvSIFebMWc3Dp0P87bYRP83TlpXpNNqeByc93fls888TukcRxRBKlcReIjf42IZfb/D4aN+F4y4txwIZ2TQk6AyNTzO21NOOOP8AieMBP/5F7Lr/AOoxI9RPzp/h+GEYLG4hh2Dds27Z7yXzvHgJQUKpsDldFx6AcYe3iRbuXMy3oUjkrZSVI56xl/F4Vn7Y66uHa2qsc8qZXZSNYHf+VJcNxPV3Ld1fitOrqPFGDCfCRrQKxgQ0TyilYEMLOGKqJtmZj4Se7w86lLVy5lUBH0gxEfZ1Ec9eVETP3mks7CSJ0Io2ahfD2nLElLgXqwultyfjbQCNDtTjGJdaPq7rDq2UDIwEEjRtN/8AWnXD8USN/PWn7P8Av1oZmwRXr9m8Zi1cAylZ6tyddZGhmhxDX5H83unQa9W/8KtVoabnaikD9j/WtmHANhT2Y86kLKacgN5NNLZyiIBH6U5w52BHeIpBgXca98imtpIJ89v40q43/fyoLdsyfMRr31gjhgOyfCKZ4rUzr46Uu9J3xvvyogGBaJB2qR4XjzhsatyeyLrK/wDVYkH2Bn0pmUkGjcVt/WMO9jrHjtRQHs2y/aV0ZGEq6lWHeCII9qwm7wG5hrps9mEZlmDmbXst8WpYQa1/ohxDrsKkmXt/Vv3ysQT4lSp9aielPDAMTbxBH1agu/dNsZhP9aFX8PjXRGn2LwtKTTGXRe5HEOplSLOGKaDXPnUuZnbOz+wq58XMWLx7rb/5TWb9CsSVxql4JuB1LHeW7Z17iVGnfWmcQt5rVxfvIw91IoyVG5o4yR5fxzZrjHvY/LSiWBpSdo9lZ8/WKVt/rUvoH2PGbUeVb90C/wC3Yb+z/U1glq1JEnl6+teg+iFrLgcKP/Rtn3UH9aEewT6Hhj+UDv6pvbMtM+lt1kwd9lMEJIPdqKh24z/zkWZGTqDb87hIux/cHzqd6SJOExAIB+quGCJBhSdRz2p7FS2jC8Txy/OmJYei/wAKZpjrj5jeuC4p1XQA8+a7iJp5hsHadhnRSukwSDr9rxG9GwHD7PbcW4PVsCD2hBZcrDu0U0rlq7O58aXUV/bX8IPhXFLeHuu622ckFfiiATPOZmB7VIY3pWHt3LZssudSuYuCBIiSIq+/Rddd7r23bPbS12EKLlXtgaNEk771ZPpGunD4C5dshUcPbAZUUkBrig7gjY1lvZDkkk6a3/zS/g8+jn/teD/sh+ZrLfpfeOJH+wt/5rtat0Dul+H4Z2Ms1vMx2kkkkwNBrWUfTAP+Zf8As2x/iu0z6IR7E/o5tk3bjchbE+ZOn61BcaxRa/duRILkgzH2tPT07qkuh/Eer662qks9vssNcuUNuBrEsKhb1h5Kypjskz2hrMQdue4qUju4FUHJ/wDCSFgnhmp3xTt2VLb2V0MbV6NXasPwHCgcBlY3G/nBb4ipg27Y+zGmprcRTQadnNzSckjDeLYnhyY3Em/hFf6+5nIvsxY52klcnZn7oMDaasnTHGYW9wQNgwos9YgVEATKQ+qleRnU98zzmqH04wCvjL7gxF24GhS09tiCQPxCfCk8FiicBi8PIg3LFwCeYcq3lIye1ZSDJLFEC5O0Ebb70ulmFGY6kkd/dr4im7CWgiI0gmfWaneK4XqurQqc7WrVxp5F0zZR3DWgAaYVOYPh4f6UndEqxUbFZ5zLDbvpTDOfh130pdl/6kgjUa/iBOtKYQwTEEnTuM+dTNppI+93E76jYxtUMijT5cqco5VlJ1HdvHiKxiYytse/1/1pzh7OYTPM/vem2FvAkeOo/e1SFnQR+tZIwK2iVLaDw5ny8qcWhA25+vP5VAPxK9EZVjUQQf8A7UpbxeMXnZ8srbdxGeltDUyyqigfCc3MmYAPMR+VMIgmDMcxz7qgrnEMcD2Uskb/AAt8pbWkrPEeIOx7NvTclTHzNbRtlqv2yAKb4lASInbWY/TlUH1+OiSbcb/Cx9fioxfG75rR7zkP/wBqOjUyU6omfL9Ke4y0C5PMu4Aj+lvvVTxPEcUEJUp3QUgc9dT4UxTjuNdyAVzNv2Y5kmNdKZbA00zV/o7cpcuJPZuAED+kpOvhIzf3RUz09xeWwtsb3G/wrqT75fnWddDsffVr3WNm6s2mSFy6lnJHl2asvSrHC/eBXVFRcuu8jMfWMy+lW41pDw425p/7RWLLMjqynK6sGXwIMge/71rYODcSXEWluLz0Yc1YbqfL8oPOslZJ21O3mR/EfMVJcE4tcwzZ07Sn40OgYd/gw2mqyVl+fizWuytdJuiwt3rgsKZV2m2TyOoyTuYIOX27qqqJ37yd/Ctj4+iYwrfwrfWgAPaJCOY1DAHcjaRM6RtVZxPR44gxcw91Lo/8gtMCfE6dr9wRU3HwR9tONrT+0VjCWGuOlsQXcqi98sQo+ZFb3xXiFvBYUu3w21CouxYgQqDxMemp5VmvR/g9nhr/AMqx1xWurIs2bfbYEiC55K0EwDAEmTO1f6Vcbv8AELgLkog0t21MhR94yO0xG59B4yTxJODkxjjeL3BfGIzDrVui6Dr8WbNG/wAJ2ju0rfuE8Qt4vDJeT4LqSQdxI1U+I1FecX4c5nM5+Q/Sr/wDj74K1h4UtbZVV1JjNqRmTkGGnnt3RoyQ3syl0V9sO1u41tjD23KsTyZc+vipj5iu4UhFq6Y0DII8lzQD+L51aeM4a3i7q4nBOjl8rXLJIS4DBGZVYiQRuBzEiajsNwzEC09s4e4sMZZwLaDswDneBGm9LNaOr3LW9eST+iYzfv8AIhYiNfiGs8wdPnVh+lkxwy5/Xtf/ACpVX4FxbC8OW64cYnEOBItGLSAbILrCDJ1JAOw00o/SbpOMfgL1kp1d0MjBQcwbI6swUxuAKeLWJyz45Slklot30Z3w/DMPH2Q6HwKXHX9J9azL6Yj/AMxP9ha/zXaJ0B6XNw9mt3FZ8PcOZgurW226xRzBAAI8ARrobb014DZ4si4nAXrVy8i5SuYAukkhWB1RgSYzAbkHkQbTI4uL2UroJw63ct3bruymerUq2UjQMx9ZXfuoMFg+txVy3mZktv8AEQASFU5tgNcxinHBOF4+xauW1wl0O1zY235pEh4yxoNdRVi6OcFexlfFEW7lwNnQ5S5LnMQqr/V1YwNTvFQnbdHSpVBKyXODFvCBF+07MCd4hVn3BH4a0JaprJ1qEhkWVhVLRlEAAa+frM86nr/SDC21zPiLSjvLgDSBv5ke9PCkc87ZhnSR5x2KUn/zXTuRs7d1V/8AlY0yqO//AGq0cZ4WLuLuXkxWDKXLt1lnEICyu7FdO+I0p/wnolhyQcTxDDovNbV0Ox8MxgL7Gl6ZW00RPRDgFziGJVSv1AIa6Z0CiOwD954gep5VLfSVC8SuRpFu3HL7O3pWm8IxvDsLbFuzesog1+MEsfvMxMsT3ms56drbv413RldSiAMsEaL3inlSiTjbkU625BJOtOkeUcbEgRz5z+Qp2nDh939PypO90ZS5lOqmdY5ipZFcaI9V39aVS20CJJ8Oe1Sj9H7aDRAYjcTv4fvelsPwsCIHtp+VBzCoEVg7pB1Gkyecehqc7J1zUP8AwteYmjpw9Y2HtRU34A4LyT7dGUI0cz5Uth+jakiXOyjYcqmUmYpwg1HpT0hMmQeE6PKq/wDUMCdIG1LWej6Ak5mM+WlSqDfxpUVkkByZXn6PoCBmbYjYUi/AECkZjsBsPWrGy0QpWxNmyq4ro+ioYLRoD8PdqfnUTwrgFsXPibw2q9Ym1NsjvqCwaqLmm4Py76NBybDf8OWznKknPEz4Bo28WqOupBkDXtECfukNr6ZqsOKXM6L/AESfZkH61FYmxlgxoCpPiD2T+tdHHpHdw/ihg9jlPPLPn2rbfpPdQJbnTnJgdzc19acm3oAeRNlvMGUb5gelJo2bfTN2WO0ONj6j9aqVG12wGER78jzB/fdTO89wCM75e7MYj+rMeYqTuay3ow8e/wBaI9sMPGlY6RG2bkLkgZIkryOmhA/Ua+1FfhwaGtmeYHP0pVkyHXbfTl4jw7xSiWipldQdSBr6r/D9hZQUuzT41IiWwusvrGmvKnnEEDWbIAUrFwazIIzty5CAfen3ErlshZnM2ildZgEzP3REGe8eVIZvq7QUkst3KyqBqrsNyfAt71yyjjKiUI1KiGwAzpPIAHQTsxB07jOp5Urj8ISSoHaN1wBm00yN2D3RMeNE4IOr6xDyLIPvaANP9XQz/pT/AIspFwnl9Xd27BOS2Zn7HOBTD/kNOE8Ke6sqs6qp0naT21+zswnv8ql8Bwhrilw2QrnlviOYaAFR8Qy8943mi8Ifq7h5K0kgtABRw0i4NjGoHnVlwqZbhUSUulTnEJ2kLNK5dyVEkbGNNyKFgkmlaKNxTg9y2XzWwuXcAg6CO0PDWoY2gSNNtvDyrWsRgzdtq65c8PspyPmIGuaNSuuXxNZ5x/hvU3Dl1tMewZBgjdZHcdp1jyNK0c843v8ApNdDLT3O29y4QtwgAsSD2V0gnlmFWDiljI1q4NgAjDz0DfML+OoroSR1X/uMT8h+gqy8dwpuWrttfiyyn9YKpT/Gi1GT2RR3CmG3dlHsLdVnpXhZDWz9pcq/4l/+TKam8Bc7cjUMZHyj8hQ9LcHnt513Uuw81brI9ZrKVr9Gap/sxXDv9Wh+7cH5T+tXA2hVbx1jI+Jtjk63F8AxU/5WFWfCtKIe9VPuoNUk7AuhyE0Xype1bpNBPp/v+tOUFAwItiNqWUCBFBbiaF55VgBnWdIpS2msRXW9qMm9YwIWhyUYmiE0UYtqilEGo86BBR1pyITLXUcCuIrGChaK691KLQmmMN3SRUQlkLcPKpxqZdQc+blWChFbM37Z5dXcHqXs/oDSPEbIML97Oo8wTl2qT6rtoRuDHof9hUXxbEBRIibbo3ubm3y+VWh0dfA7SoimTOImetSV/rpIj1g+9NA2btRpcEGfvjn76/iNOLz5Q4U62rmde/KdIHsnvTYkMxAOj9peWsbabcx6CqI7Ug6XO/f4XBHlr8vcUoLJVo9vGkC+aGIg/C3pGvhIj1FPrS5xljUfCde/u/fLurMPQ2u4bMPmD3U0QiyC7mEBEjcyeSLzJ5DnT/G423YQ5yc32UClnJ7lA8dNYGtR3VPcYXLoAj4LY2TTcn7TflUp8igtiy5EkNrNuS1wplZuRiVWSQumk6kmOc+FMeKqwWQSIIMzAmYnx3+QqcaKieI25JMD4DJOugM6KOYMGa44ycpWyUH8hl1gW5IIh3V4UaAsjBsvqNqk797OFYmPquraAW1RVgum8wNvGobEaWrTyxC3csaaRn+Hu5jXuFSCL2jEypI5BwCmbTkzb+tXLRW2SnCrWoyyILAlO0AcoZHdNyeUDeatrWTlV0YAFg500nJKmN7YzgegOmtV7giJ/KLYJGpgT2HGe2wVmjRjMiP4VZnkKwJ1NnZxBLA5CLkCGBI0jvPIigxJvaX+2OMIASTr2iBBlpyAHUDso8mPHKN96juN8JF62bbaTGRmOzucwDqoMFWjXuuEUpgLoV7lszkgZQTlUhurGh3Pg3jFIcW6WWbRKoesuS2ijKo1yxcbXMQATprpyoWq2J7U3Koqyi9GOJth75s3RlXrWVgdMhDET5aVpPE73VhLgE9kAx/QM7/hrHuM483cQWIQHKBKCAYYCdSSdOZM6Vo/AbzYjh11LhJa3LA8ysC4o9wVqE1ZGccJU91oQwZ6t7ls/wDiuugj7gh7f/62SrCBmtgHcOP8WZD+YqnfysLiApMh7aKx5s9otZ6zye2LTfiFWfCXSVgfvT+KmpOVSaDKNxTM86U8NKXQ4GjW3Q/1rZDD3Ej8FG4f/wBK1/Z2/wDKKuHSjAhxcEazmXzKnQehYfiFU7hBmza/s1HsKqnqif0SaNz5U4RdaQtkGRpoY+QP607U6UwtA2wKUNJo6zuPelc47xFEFAjajqtEV1Mdoa+NHzCNxWMAzcqCK4sOdDp41jEuvGHjQL7H+NHTilydcvsf402s2gNxymPOhYAHVannLyNjHwODxa5Oy+x/jSZ4vc/o+x/jRND9kbfn5UL2VGwrZS8mUY+Aw4vc5BfY/wAaEcXuf0fb/Wkkw4kzqdKM1lQZ0jnS5y8hxj4JHh2Ka4TMaREDzqQKVDcGEO0TEfqP361N5q6eN3HZCaqWhFhqPMfnVZ4oZu3VP2kVh6KjfnNWZ1Y6LGaQROmxmqxxG2wxNpeZVUJ5E9oT7RVYzjFbOj07SIy68FHJ0ZcjenZn5L7U0RolDuDIPgdx7/nVi/8A82cuU3BvIhSY+Ypzb6OWgQzFmI0+6OQO3vT+4jqfqYL7IK0igrnuAI+UMZ2J2nTcE7V2fEXCy4W2ZU5TeuzbRY3ZUIzPG45a89addIOGquUhezyG8H19/Wii874ZAM0ISjxtA+GeexHhUpeo7VCT5G4px+xpfwSW7jObjXbjQXuk7nmEH2V8Kg8ZxRlMSamGFVvGWMzVyuWTtiK6DHir9/vS/D8QblwS4BMjxOkwPDTXwqLGGNECldv35ijFpOxoOpbJBsLmt3VyqGVwxBJLCQHIkabAj0p3hnjIdgerZZltYKMFPfBGp76jExNwFmDwWgtoADGg0HcNKSt4y5KZSEmAco5CTz2q2aLOcfJarDFEBJyhAmrDrETK8ghtydh4Qe6pK30xAVkUF31VTP1Qacwcue0J+7qJ0mqHikkgT3n3/ZrsLcKNmWJ0MkA7EHYiKXOze5DKpLRb8XgsQ2rXj1JQZXK9XCECVKg7A5Rudpqu4/FJbHV2SSQIdw4ZTmVcwQQI10Jk7etI4vHXLmj3GK8lnsjnouwpuLYJ1HdNJasbk9U3HGOiMW3qnig+eatS+jrEg/VnZ1Kn5sPzI/DWf3reqlVJjKOXKe81KdH+JvZupkUZuWY6DeJA33Ok0JO6ZxY6aH/SGwEOGuKIzB7DHue0WtE+uS0fWrF0exuYKx57+BnUehmqdx97jq7M5zF+sj7KuWBLKmykneN+dRvDeJ4u2QFuqZMwyCJmeUHWlwU9oa3H4s07E3lYWxOpUgnxBIn+8F96pz4bqmZIgZjA7gdcvpMelINxTF9lmWycuZdFbTPrIl9TMctKNfxjXDLRPgIoJNMVi6QOQpwL1Ry3aVRzT2LQ8z6VyXppCSa62hHOtZqJG04mPWl81R9u5v8Avup0j8qYA4UzThF0plI1+VLpd0ooDRM9WZ3/AH3eVFbCHXWd/wBmurqXFC5MPYwrQBpoI32o64P7ze1dXUygjOTB/kp+9Rmw456/KurqGKBkxXDKFOmgj+FOhcrq6niKw+Gftr6/kagC+fGz92T8o/WgrqWfa/ZXi6f6JsPQPfA8q6upyQy4tbD227xqP35VE9HsQEuFDs+n4hMe4JHtXV1Sl+SOji3xsc8b4csZ7axHxAfmBVNu2jtGh591dXUs4qzccnQgcKZ/Lamr4c11dSoqxJrcCk7NqOrY/vsmurqYy+gTJJ7tqN1Jrq6gxfsUTCk0uuGEb0NdQYUFeyKJhra9daExLqCe6SBNdXUYgcmT/TnDhXgCAQNh41V8MO0vmPzrq6mh+LBPtEpjuyAv9I/L/em6V1dWj+JuT8g6tSyuKGuoiCivRluV1dWAdYuGWnvp0j611dTAF1uChDV1dQCf/9k="
                        alt="produk"
                        className={"img-fluid"}
                        width="100%"
                        height="200px"
                      />
                    </div>
                  </GridItem>
                  <GridItem lg={8} xs={12} sm={12}>
                    <JustifyBetween>
                      <div className=" ml-3 ">
                        <h3>Nama Pakaian</h3>

                        <div className="rounded-size my-lg-4 my-3 ">
                          {sizes.map((size, index) => (
                            <div key={index}>{size.size}</div>
                          ))}
                        </div>

                        <strong className=" mt-lg-0 mt-4 d-block">
                          Rp 290.000
                        </strong>
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-end">
                        <span className="hapus-wishlist">
                          <BsFillTrashFill />
                        </span>
                        <div className="qty-product">
                          <div class="number">
                            <span
                              class="minus"
                              onClick={() => removeProduct(item.id)}
                            >
                              -
                            </span>
                            <input
                              type="text"
                              value={item.qty < 0 ? 0 : item.qty}
                              disabled
                            />
                            <span
                              class="plus"
                              onClick={() => addProduct(item.id)}
                            >
                              +
                            </span>
                          </div>
                        </div>
                        <div className=" mt-lg-0 mt-2 ">
                          <strong>Total: Rp 540.000</strong>
                        </div>
                      </div>
                    </JustifyBetween>
                  </GridItem>
                </JustifyCenter>
              </GridContainer>
            </div>
          ))}
        </GridItem>
        <GridItem lg={4} xs={12}>
          <div className="voucher-form mt-5">
            <h4>Anda punya voucher diskon?</h4>
            <TextField
              placeholder={"Masukkan voucher diskon..."}
              id={"standard-voucher-input"}
            />
          </div>
          <div className="checkout-form mt-3 px-lg-4 px-2">
            <div className="d-flex justify-content-between">
              <h4>Alamat</h4>
              <span className="ganti-alamat">Ganti Alamat</span>
            </div>
            <div>
              {" "}
              <strong>
                {" "}
                Jl. Sekian Kali 2 no. 19 Rt 09 Rw 10 blok J/09
              </strong>{" "}
            </div>
            <div className="my-3">
              <strong>Total Harga</strong>
              <h2>Rp 142.000</h2>
            </div>
            <div className="btn-bayar">
              <Button size="medium" variant="contained" background="#94D0CC">
                <span style={{ color: "white" }}>Bayar</span>
              </Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Checkout;
