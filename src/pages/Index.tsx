import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const monuments = [
  {
    id: 1,
    title: 'Пирамиды Гизы',
    period: '2580-2560 гг. до н.э.',
    builder: 'Фараон Хуфу (Хеопс)',
    material: 'Известняковые блоки (2,3 млн блоков)',
    height: '146,5 метров (изначально)',
    description: 'Великая пирамида Хуфу — единственное из Семи чудес света Древнего мира, сохранившееся до наших дней. Построена с невероятной точностью: отклонение основания составляет всего 58 мм.',
    facts: ['Вес каждого блока: 2,5-15 тонн', 'Стороны ориентированы строго по сторонам света', 'Внутри три погребальные камеры'],
    image: 'https://cdn.poehali.dev/projects/b6ed16c0-1fa2-43e2-88e5-465b58fcb42a/files/6d5e94a8-f479-49b2-b8b7-854eb7ab6ba5.jpg'
  },
  {
    id: 2,
    title: 'Большой Сфинкс',
    period: '2558-2532 гг. до н.э.',
    builder: 'Фараон Хафра (по основной версии)',
    material: 'Монолитный известняк',
    height: '20 метров, длина 73 метра',
    description: 'Древнейшая монументальная скульптура, изображающая лежащего льва с человеческой головой. Охраняет пирамиды Гизы на протяжении 4500 лет.',
    facts: ['Лицо Сфинкса повреждено (нос отбит)', 'Между лап находится стела Тутмоса IV', 'Вырублен из цельной скалы'],
    image: 'https://cdn.poehali.dev/projects/b6ed16c0-1fa2-43e2-88e5-465b58fcb42a/files/6c1f59e0-68e1-4a05-9e58-bfe5766098a8.jpg'
  },
  {
    id: 3,
    title: 'Луксорский храм',
    period: '1400 гг. до н.э.',
    builder: 'Аменхотеп III, достроен Рамсесом II',
    material: 'Нубийский песчаник',
    height: 'Колоннада 21 метр',
    description: 'Величественный храм, посвященный богу Амону-Ра. Соединялся с Карнакским храмом трехкилометровой Аллеей сфинксов.',
    facts: ['260 метров в длину', '14 колонн в виде папируса', 'Два обелиска (один увезен в Париж)'],
    image: 'https://cdn.poehali.dev/projects/b6ed16c0-1fa2-43e2-88e5-465b58fcb42a/files/f01a27b5-121d-463a-99e5-516856397949.jpg'
  },
  {
    id: 4,
    title: 'Карнакский храм',
    period: '2055-100 гг. до н.э. (строился 2000 лет)',
    builder: 'Множество фараонов',
    material: 'Песчаник, гранит',
    height: 'Великий гипостильный зал: 134 колонны до 21 м',
    description: 'Крупнейший храмовый комплекс Древнего Египта. Каждый фараон добавлял свои постройки, создав архитектурный лабиринт.',
    facts: ['Площадь 80 гектаров', 'Священное озеро 120×77 метров', 'Обелиск Хатшепсут высотой 30 метров'],
    image: 'https://cdn.poehali.dev/projects/b6ed16c0-1fa2-43e2-88e5-465b58fcb42a/files/f01a27b5-121d-463a-99e5-516856397949.jpg'
  },
  {
    id: 5,
    title: 'Абу-Симбел',
    period: '1264 гг. до н.э.',
    builder: 'Рамсес II Великий',
    material: 'Высечен в скале',
    height: 'Статуи Рамсеса: 20 метров',
    description: 'Два храма, вырубленные в скале. Дважды в год солнце освещает статую Рамсеса в глубине храма — феномен, рассчитанный древними архитекторами.',
    facts: ['4 колосса Рамсеса у входа', 'Перенесен в 1960-х годов из-за строительства дамбы', 'Малый храм посвящен Нефертари'],
    image: 'https://cdn.poehali.dev/projects/b6ed16c0-1fa2-43e2-88e5-465b58fcb42a/files/c9d409b9-bd66-4987-9b0c-c5f9646f5252.jpg'
  }
];

const timeline = [
  { period: 'Древнее царство', years: '2686-2181 до н.э.', event: 'Строительство пирамид Гизы' },
  { period: 'Среднее царство', years: '2055-1650 до н.э.', event: 'Начало Карнакского храма' },
  { period: 'Новое царство', years: '1550-1077 до н.э.', event: 'Расцвет храмового строительства' },
  { period: 'Поздний период', years: '664-332 до н.э.', event: 'Завершение великих монументов' }
];

export default function Index() {
  const [selectedMonument, setSelectedMonument] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Древний Египет</h1>
          <div className="flex gap-6">
            <a href="#monuments" className="hover:text-primary transition-colors">Памятники</a>
            <a href="#history" className="hover:text-primary transition-colors">История</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Путешествие в вечность
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Откройте тайны величайшей цивилизации древности. Познайте архитектурные чудеса, пережившие тысячелетия.
          </p>
          <Button size="lg" className="animate-scale-in">
            <Icon name="Compass" className="mr-2" size={20} />
            Начать исследование
          </Button>
        </div>
      </section>

      <section id="monuments" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Памятники Древнего Египта</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Архитектурное наследие фараонов
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monuments.map((monument, index) => (
              <Card 
                key={monument.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedMonument(selectedMonument === monument.id ? null : monument.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={monument.image} 
                    alt={monument.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {monument.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <Icon name="Calendar" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Период</p>
                        <p className="text-sm text-muted-foreground">{monument.period}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="User" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Создатель</p>
                        <p className="text-sm text-muted-foreground">{monument.builder}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Mountain" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Материал</p>
                        <p className="text-sm text-muted-foreground">{monument.material}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Ruler" size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold">Размеры</p>
                        <p className="text-sm text-muted-foreground">{monument.height}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible value={selectedMonument === monument.id ? 'details' : ''}>
                    <AccordionItem value="details" className="border-none">
                      <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
                        Подробнее
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm mb-4">{monument.description}</p>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold">Интересные факты:</p>
                          {monument.facts.map((fact, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {fact}
                            </p>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Историческая линия</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Эпохи великих строителей
          </p>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform md:-translate-x-1/2" />
            
            {timeline.map((period, index) => (
              <div 
                key={index} 
                className={`mb-12 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-0`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-2 text-primary">{period.period}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{period.years}</p>
                    <p className="text-sm">{period.event}</p>
                  </Card>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg z-10 flex-shrink-0" />
                
                <div className="w-full md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Визуальное путешествие через века
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {monuments.slice(0, 3).map((monument, index) => (
              <div 
                key={monument.id}
                className="relative h-80 overflow-hidden rounded-lg group cursor-pointer"
              >
                <img 
                  src={monument.image} 
                  alt={monument.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{monument.title}</h4>
                    <p className="text-sm text-white/80">{monument.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="Image" className="mr-2" size={20} />
              Смотреть все фото
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Древний Египет</h3>
          <p className="text-background/70 mb-6">
            Туристическая компания по исследованию величайших памятников человечества
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Mail" size={24} className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Phone" size={24} className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="MapPin" size={24} className="cursor-pointer hover:text-primary transition-colors" />
          </div>
          <p className="text-sm text-background/50">
            © 2024 Древний Египет. Все памятники находятся под защитой ЮНЕСКО.
          </p>
        </div>
      </footer>
    </div>
  );
}