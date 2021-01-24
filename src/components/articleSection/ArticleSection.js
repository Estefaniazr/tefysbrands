import React from 'react';
import Info from "../info/Info";
import "./ArticleSection.scss";

const ArticleSection = () => (
    <div className="articleSection-external">
        <div className="articleSection-internal">
            <div className="articleSection-container">
                <Info
                    title="Nuestra filosofía"
                    text="Contactanos"
                    info="Nos gusta crear marcas atemporales y webs estratégicas para emprendedores, con el
        objetivo de conectar con tu personalidad y trasladarla a tu marca."/>
                <div className="articleSection-quote">
                    <div className="articleSection-question">
                        <div>Hazte esta pregunta:</div>
                        <div className="articleSection-bold">Si tu marca desapareciera hoy, alguién la echaría de
                            menos?
                        </div>
                    </div>
                    <div className="articleSection-answer">
                        <div>Si tu respuesta en NO.</div>
                        <div className="articleSection-bold">¿Damos el primer paso?
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
);

export default ArticleSection;