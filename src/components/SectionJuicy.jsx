import "./SectionAll.css";

export function SectionJuicy() {
    return (
        <>
            <section className="section juicy">
                <h2 className="section-heading">Cozy</h2>
                <span className="section-quote right">Hang around. Enjoy the settings.</span>
                <span className="section-quote left">It&apos;s as simple as that. Chunky or smooth - it&apos;s your choice.</span>
                <div className="section-table">
                    <span className="cell">Branched Apricots</span>
                    <span className="cell">8am – 11pm</span>
                    <span className="cell">Deep Rasberries</span>
                    <span className="cell">Canto VI</span>
                    <span className="cell">Smooth Oranges</span>
                    <span className="cell">caffe@lorem.pge</span>
                </div>
            </section>
        </>
    );
}

export default SectionJuicy;
