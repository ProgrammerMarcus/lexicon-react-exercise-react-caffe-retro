import "./SectionAll.css";

export function SectionCozy() {
    return (
        <>
            <section className="section cozy" id="cozy">
                <h2 className="section-heading">Cosy</h2>
                <span className="section-quote right">Hang around. Enjoy the settings.</span>
                <span className="section-quote left">Use our fast WiFi. Borrow a newspaper or a novel.</span>
                <div className="section-table">
                    <span className="cell">Mon-Sun</span>
                    <span className="cell">8am – 11pm</span>
                    <span className="cell">Caffe Retro</span>
                    <span className="cell">Canto VI</span>
                    <span className="cell">0123-45 67 89</span>
                    <span className="cell">caffe@lorem.pge</span>
                </div>
            </section>
        </>
    );
}

export default SectionCozy;
