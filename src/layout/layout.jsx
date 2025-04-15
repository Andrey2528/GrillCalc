import HomePageContent from '@/components/Home/HomePageContent';
import '@/styles/index.scss';

const Layout = () => {
    return (
        <main className="Layout">
            <section className="Layout__section">
                <HomePageContent />
            </section>
        </main>
    );
};

export default Layout;