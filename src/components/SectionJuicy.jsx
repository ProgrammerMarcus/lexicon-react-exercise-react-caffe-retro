import "./SectionAll.css";

export function SectionJuicy() {
    return (
        <>
            <section className="section juicy" id="juicy">
                <h2 className="section-heading">Juicy</h2>
                <span className="section-quote right">Ripe fruit - freshly squeezed.</span>
                <span className="section-quote left">It&apos;s as simple as that. Chunky or smooth - it&apos;s your choice.</span>
                <div className="section-table">
                    <span className="cell">Branched Apricots</span>
                    <span className="cell">€ 7.50</span>
                    <span className="cell">Deep Rasberries</span>
                    <span className="cell">€ 5.00</span>
                    <span className="cell">Smooth Oranges</span>
                    <span className="cell">€ 3.50</span>
                </div>
            </section>
        </>
    );
}

export default SectionJuicy;
