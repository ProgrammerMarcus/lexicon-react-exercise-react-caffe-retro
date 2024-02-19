import "./SectionAll.css";

export function SectionCozy() {
    return (
        <>
            <section className="section cozy">
                <h2 className="section-heading">Cosy</h2>
                <span className="section-quote right">Hot freshly ground black coffee or a cup of exquisite tea?</span>
                <span className="section-quote left">Use our fast WiFi. Borrow a newspaper or a novel.</span>
                <div className="section-table">
                    <span className="cell">Mon-Sun</span>
                    <span className="cell">€ 7.50</span>
                    <span className="cell">Caffe Retro</span>
                    <span className="cell">€ 5.00</span>
                    <span className="cell">0123-45 67 89</span>
                    <span className="cell">€ 3.50</span>
                </div>
            </section>
        </>
    );
}

export default SectionCozy;
