import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const services = [
    {
      title: "Романтический вечер",
      description: "Незабываемое свидание в ресторане или прогулка по городу",
      icon: "Heart",
      price: "от 3000₽/час"
    },
    {
      title: "Деловое мероприятие",
      description: "Сопровождение на важные встречи и корпоративы",
      icon: "Briefcase",
      price: "от 4000₽/час"
    },
    {
      title: "Культурная программа",
      description: "Посещение театров, выставок и концертов",
      icon: "Theater",
      price: "от 3500₽/час"
    },
    {
      title: "Семейные мероприятия",
      description: "Помощь в организации и проведении праздников",
      icon: "Users",
      price: "от 3000₽/час"
    }
  ];

  const tariffs = [
    {
      name: "Базовый",
      price: "3000₽",
      duration: "1 час",
      features: ["Сопровождение", "Приятная беседа", "Фотосессия"]
    },
    {
      name: "Премиум",
      price: "15000₽",
      duration: "5 часов",
      features: ["Всё из базового", "Подарок", "Организация досуга", "Ужин в ресторане"],
      popular: true
    },
    {
      name: "VIP",
      price: "25000₽",
      duration: "10 часов",
      features: ["Всё из премиум", "Персональный водитель", "Эксклюзивная программа", "Букет цветов"]
    }
  ];

  const reviews = [
    {
      name: "Александр",
      text: "Прекрасный вечер! Всё было на высшем уровне, очень благодарен за профессионализм.",
      rating: 5
    },
    {
      name: "Михаил",
      text: "Отличный сервис, помогли организовать незабываемое мероприятие. Рекомендую!",
      rating: 5
    },
    {
      name: "Дмитрий",
      text: "Превзошли все ожидания! Приятная компания и безупречный сервис.",
      rating: 5
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1519167758481-83f29da8c2e6?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-playfair font-bold text-primary">Романтика на час</h1>
          <div className="hidden md:flex gap-6 font-montserrat">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="font-montserrat">Забронировать</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary/20 via-background to-accent/20">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-6">
            Романтические моменты<br />созданы для вас
          </h2>
          <p className="text-xl font-montserrat text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональное сопровождение для особенных событий вашей жизни
          </p>
          <Button size="lg" className="font-montserrat text-lg px-8">
            Выбрать услугу
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in border-secondary/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-playfair text-xl">{service.title}</CardTitle>
                  <CardDescription className="font-montserrat">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-montserrat font-semibold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">Тарифы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative ${tariff.popular ? 'border-primary shadow-xl scale-105' : 'border-secondary/30'}`}>
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-montserrat">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-playfair text-2xl mb-2">{tariff.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary font-montserrat">{tariff.price}</div>
                  <CardDescription className="font-montserrat">{tariff.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tariff.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-montserrat">
                        <Icon name="Check" className="text-primary" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full font-montserrat" variant={tariff.popular ? "default" : "outline"}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">Фотогалерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-[4/3] group">
                <img 
                  src={img} 
                  alt={`Галерея ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-secondary/30">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                    ))}
                  </div>
                  <CardTitle className="font-playfair text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-montserrat text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">Свяжитесь с нами</h2>
          <Card className="border-secondary/30">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="font-montserrat"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="font-montserrat"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    className="font-montserrat min-h-32"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full font-montserrat">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4">Романтика на час</h3>
          <div className="flex justify-center gap-6 mb-4">
            <Icon name="Phone" size={24} />
            <Icon name="Mail" size={24} />
            <Icon name="MapPin" size={24} />
          </div>
          <p className="font-montserrat text-sm opacity-80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
