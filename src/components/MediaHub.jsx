import React from 'react';
import '../styles/MediaHub.scss';

const MediaHub = () => {
    return (
        <div className="mediahub-container">
            <a href='https://www.youtube.com/c/TippsausEuropa'>
                <h1>Our Youtube Channel</h1>
                <h2>Tips From Europe</h2>
            </a>
            <div className="mediahub-grid">
                <div className="mediahub-item">
                    <iframe
                        src="https://www.youtube.com/embed/b122ta41eqY"
                        title="YouTube video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="mediahub-item">
                    <iframe
                        src="https://www.youtube.com/embed/xoNbGlMJLOs"
                        title="YouTube video 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="mediahub-item">
                    <iframe
                        src="https://www.youtube.com/embed/1AdP3tATdq4"
                        title="YouTube video 3"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="mediahub-item">
                    <iframe
                        src="https://www.youtube.com/embed/GmsGqsqyu9U"
                        title="YouTube video 4"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default MediaHub;
