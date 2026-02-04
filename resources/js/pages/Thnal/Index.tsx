import ThnalLayout from './ThnalLayout';
import { Card } from './components/Card';
import Hero from './components/Hero';
import ThnalBanner from './components/ThnalBanner';

const Index = () => {
    return (
        <ThnalLayout>
            <Hero/>
            <div>
                <ThnalBanner />
                <Card />
            </div>
        </ThnalLayout>
    );
};

export default Index;
