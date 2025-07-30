import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "TreePine",
      title: "Ландшафтное проектирование",
      description: "Создаем уникальные дизайн-проекты с 3D визуализацией и детальными планами",
      features: ["3D моделирование", "Дендропланы", "Смета материалов"]
    },
    {
      icon: "Shovel",
      title: "Благоустройство территории",
      description: "Комплексное благоустройство от подготовки почвы до финальной отделки",
      features: ["Дренажные системы", "Мощение", "Озеленение"]
    },
    {
      icon: "Droplets",
      title: "Системы автополива",
      description: "Проектирование и монтаж современных систем орошения любой сложности",
      features: ["Капельный полив", "Автоматизация", "Обслуживание"]
    },
    {
      icon: "Scissors",
      title: "Уход за садом",
      description: "Профессиональное обслуживание зеленых насаждений круглый год",
      features: ["Обрезка деревьев", "Газонный сервис", "Защита растений"]
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: "Частный сад в Подмосковье",
      category: "Частные участки",
      image: "img/c5e8dd7c-2d3b-4664-bb79-51194d012118.jpg",
      area: "15 соток",
      year: "2024",
      description: "Современный сад с водными элементами и зонами отдыха"
    },
    {
      id: 2,
      title: "Семейная резиденция",
      category: "Жилые комплексы",
      image: "img/96aa909b-99fa-4e32-a0a5-141a61b04780.jpg",
      area: "25 соток",
      year: "2023",
      description: "Многофункциональное пространство для большой семьи"
    },
    {
      id: 3,
      title: "Офисный комплекс",
      category: "Коммерческие объекты",
      image: "img/aded358f-8f3e-4e2c-b74d-ee9d0d66a08c.jpg",
      area: "1 га",
      year: "2024",
      description: "Корпоративная территория с экологическим уклоном"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опыт 15+ лет",
      description: "Реализовали более 200 проектов различной сложности"
    },
    {
      icon: "Users",
      title: "Команда профессионалов",
      description: "Ландшафтные архитекторы, дендрологи, инженеры"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "5 лет гарантии на все виды работ и материалы"
    },
    {
      icon: "Clock",
      title: "Точные сроки",
      description: "Соблюдаем договорные сроки без задержек"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-sage-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center">
                <Icon name="Leaf" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-semibold text-primary">ЭкоЛанд</h1>
                <p className="text-xs text-muted-foreground">ландшафтная студия</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-sage-600 transition-colors font-medium">О нас</a>
              <a href="#services" className="text-foreground hover:text-sage-600 transition-colors font-medium">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-sage-600 transition-colors font-medium">Портфолио</a>
              <a href="#contact" className="text-foreground hover:text-sage-600 transition-colors font-medium">Контакты</a>
            </div>

            <Button size="sm" className="bg-sage-600 hover:bg-sage-700 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-sage-50 to-moss-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
              <div>
                <h2 className="text-5xl lg:text-6xl font-display font-light text-primary mb-6 leading-tight">
                  Создаём пространства,<br />
                  <span className="text-sage-600 font-medium">где живёт душа</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Проектируем и воплощаем ландшафтные решения, которые гармонично сочетают 
                  функциональность, эстетику и заботу об окружающей среде.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-6 text-lg">
                    <Icon name="Eye" size={20} className="mr-2" />
                    Смотреть проекты
                  </Button>
                  <Button variant="outline" size="lg" className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-6 text-lg">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="img/c5e8dd7c-2d3b-4664-bb79-51194d012118.jpg" 
                    alt="Ландшафтный дизайн" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                      <Icon name="Trophy" size={24} className="text-sage-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">200+ проектов</p>
                      <p className="text-sm text-muted-foreground">за 15 лет работы</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-4xl font-display font-light text-primary mb-6">Почему выбирают нас</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы не просто создаём красивые сады — мы формируем пространства для жизни, 
              где каждый элемент продуман до мелочей и служит вашему комфорту.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 bg-card shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-sage-600 group-hover:text-white transition-all duration-300">
                    <Icon name={advantage.icon as any} size={32} className="text-sage-600 group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-display font-medium text-primary mb-3">{advantage.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-sage-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-light text-primary mb-6">Наши услуги</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл работ — от первой идеи до финального воплощения и дальнейшего обслуживания
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border-0 bg-white hover:shadow-xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-sage-600 transition-colors duration-300">
                      <Icon name={service.icon as any} size={32} className="text-sage-600 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-display font-medium text-primary mb-3">{service.title}</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-sage-50 text-sage-700 text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-light text-primary mb-6">Избранные проекты</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый проект уникален и отражает индивидуальность наших клиентов
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 bg-white hover:shadow-2xl transition-all duration-700">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-sage-50 text-sage-700 text-xs rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h4 className="text-xl font-display font-medium text-primary mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-sage-600">{project.area}</span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-sage-600 hover:text-sage-700">
                      <span className="mr-2">Подробнее</span>
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sage-600 to-moss-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-display font-light mb-6">Готовы создать сад мечты?</h3>
            <p className="text-xl mb-8 opacity-90">
              Получите бесплатную консультацию и узнайте стоимость вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-sage-700 hover:bg-sage-50 px-8 py-6 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-700 px-8 py-6 text-lg">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-display font-light text-primary mb-6">Свяжитесь с нами</h3>
              <p className="text-lg text-muted-foreground">
                Обсудим ваш проект и ответим на все вопросы
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-display font-medium text-primary mb-8">Контактная информация</h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-sage-600" />
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-1">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 987-65-43</p>
                      <p className="text-muted-foreground">+7 (926) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-sage-600" />
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-1">Email</p>
                      <p className="text-muted-foreground">info@ecoland.ru</p>
                      <p className="text-muted-foreground">projects@ecoland.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-sage-600" />
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-1">Офис</p>
                      <p className="text-muted-foreground">г. Москва, ул. Природная, 25</p>
                      <p className="text-muted-foreground">БЦ "Зелёный квартал", офис 301</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-sage-600" />
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00-19:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00-17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-0 bg-card shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-display font-medium text-primary mb-6">Оставить заявку</h4>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Имя</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 bg-background transition-colors"
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Телефон</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 bg-background transition-colors"
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 bg-background transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Площадь участка</label>
                      <select className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 bg-background transition-colors">
                        <option>До 10 соток</option>
                        <option>10-20 соток</option>
                        <option>20-50 соток</option>
                        <option>Более 50 соток</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Сообщение</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 bg-background resize-none transition-colors"
                        placeholder="Расскажите о ваших пожеланиях к проекту..."
                      />
                    </div>
                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center">
                <Icon name="Leaf" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-semibold">ЭкоЛанд</h1>
                <p className="text-xs opacity-80">ландшафтная студия</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <p className="font-medium mb-2">Услуги</p>
                <div className="space-y-1 text-sm opacity-80">
                  <p>Ландшафтное проектирование</p>
                  <p>Благоустройство территории</p>
                  <p>Системы автополива</p>
                  <p>Уход за садом</p>
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Контакты</p>
                <div className="space-y-1 text-sm opacity-80">
                  <p>+7 (495) 987-65-43</p>
                  <p>info@ecoland.ru</p>
                  <p>г. Москва, ул. Природная, 25</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-sage-600/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-sage-600/40 transition-colors">
                <Icon name="Instagram" size={20} />
              </div>
              <div className="w-10 h-10 bg-sage-600/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-sage-600/40 transition-colors">
                <Icon name="Facebook" size={20} />
              </div>
              <div className="w-10 h-10 bg-sage-600/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-sage-600/40 transition-colors">
                <Icon name="Youtube" size={20} />
              </div>
            </div>
          </div>
          
          <div className="border-t border-sage-600/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">© 2024 ЭкоЛанд. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}