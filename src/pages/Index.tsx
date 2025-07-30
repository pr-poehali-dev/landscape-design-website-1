import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Trees",
      title: "Ландшафтный дизайн",
      description: "Индивидуальное проектирование участков с учетом ваших пожеланий и особенностей территории"
    },
    {
      icon: "Hammer",
      title: "Строительство и благоустройство",
      description: "Полный комплекс работ по созданию ландшафтных объектов любой сложности"
    },
    {
      icon: "Droplets",
      title: "Системы полива",
      description: "Проектирование и монтаж автоматических систем орошения для идеального ухода за садом"
    },
    {
      icon: "Wrench",
      title: "Обслуживание садов",
      description: "Профессиональный уход за вашим садом: стрижка, подкормка, сезонные работы"
    }
  ];

  const projects = [
    {
      image: "img/2eb40943-f0f8-48b1-ad05-c75c8feecc03.jpg",
      title: "Частная резиденция",
      description: "Современный сад с водными элементами",
      area: "1,200 м²"
    },
    {
      image: "img/04a5cd63-d094-45de-bdd1-2020af799058.jpg",
      title: "Загородная усадьба",
      description: "Классический английский стиль",
      area: "2,500 м²"
    },
    {
      image: "img/936a55af-91e1-4ece-aa60-bb6d0f3e7954.jpg",
      title: "Коммерческий объект",
      description: "Корпоративное благоустройство",
      area: "5,000 м²"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Trees" size={32} className="text-primary" />
            <h1 className="text-2xl font-display font-semibold text-primary">Premium Landscapes</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-primary mb-6 leading-tight">
              Создаём сады<br />
              <span className="text-secondary">мечты</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Превращаем ваши участки в произведения ландшафтного искусства. 
              Индивидуальный подход, премиальные материалы, безупречное исполнение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Palette" size={20} className="mr-2" />
                Заказать проект
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold text-primary mb-4">Наши услуги</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по созданию и обслуживанию ландшафтных объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-display font-semibold text-primary mb-4">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
            <h3 className="text-4xl font-display font-bold text-primary mb-4">Портфолио</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Избранные проекты, которые демонстрируют наш профессионализм и творческий подход
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-display font-semibold text-primary mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary font-medium">{project.area}</span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold text-primary mb-4">Проекты</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От концепции до реализации — каждый этап под контролем профессионалов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" size={40} className="text-primary" />
              </div>
              <h4 className="text-lg font-display font-semibold text-primary mb-2">Концепция</h4>
              <p className="text-muted-foreground text-sm">Разработка уникальной концепции с учетом ваших потребностей</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Icon name="PenTool" size={40} className="text-primary" />
              </div>
              <h4 className="text-lg font-display font-semibold text-primary mb-2">Проектирование</h4>
              <p className="text-muted-foreground text-sm">Детальная проработка всех элементов ландшафта</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Hammer" size={40} className="text-primary" />
              </div>
              <h4 className="text-lg font-display font-semibold text-primary mb-2">Реализация</h4>
              <p className="text-muted-foreground text-sm">Профессиональное воплощение проекта в жизнь</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={40} className="text-primary" />
              </div>
              <h4 className="text-lg font-display font-semibold text-primary mb-2">Поддержка</h4>
              <p className="text-muted-foreground text-sm">Гарантийное и постгарантийное обслуживание</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-display font-bold text-primary mb-4">Контакты</h3>
              <p className="text-lg text-muted-foreground">
                Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-display font-semibold text-primary mb-6">Свяжитесь с нами</h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-primary">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <p className="text-muted-foreground">info@premiumlandscapes.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-primary">Адрес</p>
                      <p className="text-muted-foreground">Москва, ул. Садовая, 15с1</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium text-primary">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00-18:00<br />Сб-Вс: по договоренности</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-0 bg-card">
                <CardContent className="p-8">
                  <h4 className="text-xl font-display font-semibold text-primary mb-6">Заказать консультацию</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Сообщение</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background resize-none"
                        placeholder="Расскажите о вашем проекте..."
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Trees" size={28} className="text-primary-foreground" />
              <h1 className="text-xl font-display font-semibold">Premium Landscapes</h1>
            </div>
            <div className="flex space-x-6">
              <Icon name="Instagram" size={24} className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Icon name="Facebook" size={24} className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Icon name="Youtube" size={24} className="text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/80">© 2024 Premium Landscapes. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}