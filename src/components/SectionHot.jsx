import "./SectionAll.css";

export function SectionHot() {
    return (
        <>
            <section className="section hot" id="hot">
                <h2 className="section-heading">Hot</h2>
                <span className="section-quote right">Hot freshly ground black coffee or a cup of exquisite tea?</span>
                <span className="section-quote left">We give you that perfect cup every time.</span>
                <div className="section-table">
                    <span className="cell">Mocha Latte</span>
                    <span className="cell">€ 7.50</span>
                    <span className="cell">Caffe Formaggio</span>
                    <span className="cell">€ 5.00</span>
                    <span className="cell">Espresso</span>
                    <span className="cell">€ 3.50</span>
                    <span className="cell">Chai Verde Latte</span>
                    <span className="cell">€ 5.50</span>
                </div>
            </section>
        </>
    );
}

export default SectionHot;
