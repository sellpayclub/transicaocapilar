import { motion } from 'motion/react';
import { 
  Check, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Heart, 
  Scissors, 
  Clock, 
  ShieldCheck, 
  BookOpen, 
  Calendar, 
  Gift, 
  Users, 
  Smartphone 
} from 'lucide-react';
import { useState, ReactNode, FC } from 'react';

// --- Components ---

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: FC<SectionProps> = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: FC<FadeInProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Button = ({ children, primary = true, className = "", href, ...props }: any) => {
  const classes = `
    inline-block w-full md:w-auto px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer text-center whitespace-normal leading-tight
    ${primary 
      ? 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-brand-200/50' 
      : 'bg-white text-brand-700 border-2 border-brand-200 hover:border-brand-300'}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-100 last:border-0">
      <button
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif font-semibold text-lg text-stone-800">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-500" /> : <ChevronDown className="text-stone-400" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-stone-600 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

// --- Constants ---

const TESTIMONIAL_IMAGES = [
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depoimento1.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depo2.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depo3.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depo4.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depo5.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depo7.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depo8.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depo9.jpg",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depo10.png",
  "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/depo11.png"
];

const INSPIRATION_ITEMS = [
  { type: 'img', src: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/cacheadas.jpg" },
  { type: 'vid', src: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/cacheada2.mp4" },
  { type: 'img', src: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/cacheadas3.jpg" },
  { type: 'img', src: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/cacheada%204.jpg" },
  { type: 'img', src: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/cacheada%205.jpg" },
  { type: 'img', src: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/cacheada%206.jpg" },
  { type: 'img', src: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/cacheada%207.jpg" },
  { type: 'img', src: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/cacheada%208.jpg" },
];

// --- Main App ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-brand-200 selection:text-brand-900">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-brand-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-200 blur-[100px]" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-orange-100 blur-[100px]" />
        </div>

        <Section className="relative pt-12 pb-20 md:pt-20 md:pb-32 text-center">
          <FadeIn>
            <div className="mb-8">
              <span className="inline-block py-3 px-6 rounded-full bg-brand-600 text-white text-base md:text-xl font-bold tracking-widest shadow-xl shadow-brand-200 transform hover:scale-105 transition-transform duration-300 border-2 border-white/20">
                🥇 TRANSIÇÃO CAPILAR ACELERADA
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-tight mb-6">
              Você não odeia seu cabelo… <br/>
              <span className="text-brand-600 italic">você odeia NÃO saber o que fazer com ele!</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Um guia passo a passo para sair da fase difícil da transição, recuperar sua autoestima e finalmente amar seu cabelo natural — sem precisar raspar tudo ou gastar fortunas em produtos errados!
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Quero meu Guia por R$ 10,00
              </Button>
            </div>

            {/* Mockup Placeholder */}
            <div className="relative mx-auto max-w-4xl mt-8 p-4 bg-white rounded-2xl shadow-2xl border border-stone-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="w-full bg-transparent rounded-lg flex items-center justify-center overflow-hidden relative">
                 <img 
                  src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/5.png" 
                  alt="Mockup do Guia Transição Capilar" 
                  className="w-full h-auto max-h-[500px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-stone-100 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    {TESTIMONIAL_IMAGES.slice(0, 3).map((img, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src={img} 
                          alt="Aluna" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-stone-600 pl-2">
                    +500 alunas satisfeitas
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-sm text-stone-500 font-medium">
              
            </p>
          </FadeIn>
        </Section>
      </div>

      {/* Pain Points */}
      <div className="bg-stone-900 text-stone-200">
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
                Você acorda… se olha no espelho…
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3 text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-red-500" /> Raiz alta.
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-red-500" /> Pontas lisas.
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-red-500" /> Volume estranho.
                </li>
                <li className="flex items-center gap-3 text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-red-500" /> Nada define. Nada encaixa.
                </li>
              </ul>

              <div className="mt-8 space-y-6 border-l-2 border-stone-700 pl-6 italic text-stone-400">
                <p>Você tenta finalizar. <span className="text-red-400 font-bold">Não dá certo.</span></p>
                <p>Tenta prender. <span className="text-red-400 font-bold">Fica pior.</span></p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 relative">
                <div className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  ESCUTA ISSO
                </div>
                <div className="space-y-6 font-serif text-xl text-center">
                  <p>“Por que você não alisa logo?”</p>
                  <p>“Esse cabelo tá estranho…”</p>
                  <p>“Vai cortar tudo?”</p>
                </div>
                <div className="mt-8 pt-8 border-t border-stone-700 text-center">
                  <p className="text-stone-400 text-sm mb-2">E no fundo você pensa:</p>
                  <p className="text-2xl font-bold text-white">“Será que eu devia desistir?”</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      </div>

      {/* The Problem & Solution */}
      <Section className="bg-white">
        <FadeIn>
          <div className="max-w-2xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/cabelotransicaomeio%20a%20meio.png" 
              alt="Transição Capilar Meio a Meio" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-stone-900">
              A transição capilar não é só estética.
            </h2>
            <p className="text-xl text-stone-600">
              Ela mexe com a nossa autoestima. E o pior? <br/>
              <span className="font-bold text-brand-600">Você está fazendo tudo sozinha.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              "Sem saber se está usando os produtos certos.",
              "Sem saber se o cabelo está quebrando.",
              "Sem saber se o crescimento está saudável."
            ].map((item, i) => (
              <div key={i} className="bg-brand-50 p-6 rounded-xl text-center border border-brand-100">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-brand-500 mb-4 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <p className="font-medium text-stone-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
              <div className="p-8 md:p-12 bg-red-50/50">
                <div className="flex items-center gap-3 mb-6 text-red-600 font-bold text-lg">
                  <Clock size={24} />
                  ⚠️ FAZENDO SOZINHA
                </div>
                <p className="text-stone-600 mb-4">Sem ajuda ou com cabeleireiro que não entende do assunto.</p>
                <div className="text-3xl font-bold text-stone-900">
                  1 ANO <span className="text-base font-normal text-stone-500">ou mais de sofrimento!</span>
                </div>
              </div>
              <div className="p-8 md:p-12 bg-green-50/50">
                <div className="flex items-center gap-3 mb-6 text-green-600 font-bold text-lg">
                  <Check size={24} />
                  ✅ COM MÉTODO ACELERADO
                </div>
                <p className="text-stone-600 mb-4">Com estratégia e técnicas corretas.</p>
                <div className="text-3xl font-bold text-stone-900">
                  Poucos Meses!
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonials */}
      <Section className="bg-stone-100 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">💬 VEJA O QUE DIZEM NOSSAS ALUNAS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            "Eu estava quase desistindo. O guia me mostrou exatamente o que fazer e meu cabelo começou a responder muito mais rápido.",
            "Parei de gastar dinheiro com produto errado. Só isso já pagou o valor do guia e acelerou muito meus resultados.",
            "O cronograma salvou minha autoestima. Hoje eu amo meu volume."
          ].map((text, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full flex flex-col">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 italic flex-grow">"{text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-sm font-bold text-stone-900">Aluna Verificada</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Image Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-stone-100 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
            {[...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES].map((img, i) => (
              <div key={i} className="w-64 md:w-80 flex-shrink-0 bg-white p-2 rounded-xl shadow-md border border-stone-200 hover:scale-105 transition-transform duration-300">
                <img 
                  src={img} 
                  alt={`Depoimento ${i}`} 
                  className="w-full h-auto rounded-lg object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Inspiration Carousel */}
      <Section className="bg-brand-50 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-brand-800">✨ INSPIRE-SE NOS RESULTADOS</h2>
          <p className="text-stone-600">O cabelo dos seus sonhos é possível. Veja essas transformações:</p>
        </div>
        
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-brand-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-brand-50 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
            {[...INSPIRATION_ITEMS, ...INSPIRATION_ITEMS].map((item, i) => (
              <div key={i} className="w-64 md:w-72 flex-shrink-0 bg-white p-2 rounded-xl shadow-md border border-brand-100 hover:scale-105 transition-transform duration-300 overflow-hidden">
                <div className="aspect-[3/4] rounded-lg overflow-hidden relative bg-stone-100">
                    {item.type === 'vid' ? (
                        <video 
                            src={item.src} 
                            className="w-full h-full object-cover" 
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                        />
                    ) : (
                        <img 
                            src={item.src} 
                            alt={`Inspiração ${i}`} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Authority */}
      <Section>
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-100">
          <div className="grid md:grid-cols-2 items-center">
            <div className="bg-stone-200 relative">
               <img 
                src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/WhatsApp%20Image%202026-02-26%20at%2011.04.00.jpeg" 
                alt="Aline Peixoto" 
                className="w-full h-auto object-contain md:object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <span className="text-brand-600 font-bold tracking-wider text-sm mb-2">ESPECIALISTA</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">QUEM É ALINE PEIXOTO</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  <strong className="text-stone-900">Aline Peixoto</strong> é cabeleireira especialista em transição capilar e já ajudou centenas de mulheres a passarem por esse processo sem trauma.
                </p>
                <p>
                  Foi estudando técnicas, química capilar e prática em salão que ela criou um método organizado para atravessar essa fase com segurança.
                </p>
                <p>
                  Hoje ela transforma o que antes era sofrimento em processo estratégico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What You Get */}
      <Section className="bg-brand-50">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">✨ O QUE VOCÊ VAI RECEBER</h2>
          <p className="text-stone-600">Todo o conteúdo foi desenhado para ser prático e direto.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Guide */}
          <FadeIn className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-brand-500 h-full">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Guia completo de Transição Capilar</h3>
              <ul className="space-y-3">
                {[
                  "Como lidar com duas texturas",
                  "Técnicas de finalização que funcionam",
                  "Como acelerar o crescimento saudável",
                  "Como evitar corte químico",
                  "Quando e como fazer o big chop"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                    <Check size={16} className="text-green-500 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Checklist */}
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-blue-500 h-full">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Check size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Checklist da Transição</h3>
              <p className="text-stone-600">Para saber exatamente o que fazer toda semana. Nunca mais fique perdida sem saber o próximo passo.</p>
            </div>
          </FadeIn>

          {/* Cronograma */}
          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-purple-500 h-full">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Calendar size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-4">Cronograma Capilar Estratégico</h3>
              <p className="text-stone-600">Específico para quem está em transição (não é genérico). Tratamentos focados em fortalecimento e crescimento.</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Bonuses */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <span className="bg-brand-100 text-brand-700 px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-4 inline-block">
            Bônus Exclusivos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900">
            Leve também <span className="text-brand-600">(Grátis Hoje)</span>
          </h2>
          <p className="mt-4 text-stone-600 text-lg">Comprando agora, você ganha todos esses presentes:</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              title: "Lista Secreta de Produtos", 
              desc: "Pare de gastar dinheiro testando!", 
              img: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/2.png",
              value: "R$ 29,90"
            },
            { 
              title: "Guia de Penteados", 
              desc: "Para disfarçar as duas texturas naqueles dias difíceis.", 
              img: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/3.png",
              value: "R$ 37,00"
            },
            { 
              title: "App Planejamento Capilar", 
              desc: "Organize seu crescimento mês a mês no aplicativo.", 
              img: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/6.png",
              value: "R$ 49,90"
            },
            { 
              title: "Mistura Naturais", 
              desc: "O Segredo do Crescimento Acelerado com ingredientes baratos.", 
              img: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/1.png",
              value: "R$ 27,00"
            },
            { 
              title: "Acesso a Grupo VIP", 
              desc: "Para tirar dúvidas e se sentir acompanhada.", 
              img: "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/4.png",
              value: "R$ 97,00"
            },
          ].map((bonus, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-stone-100 shadow-lg overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300 h-full flex flex-col group">
                <div className="aspect-square w-full bg-stone-50 relative overflow-hidden p-4 flex items-center justify-center">
                  <img 
                    src={bonus.img} 
                    alt={bonus.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-xs font-bold px-3 py-1 rounded-full text-white shadow-md z-10">
                    GRÁTIS
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-serif font-bold text-xl mb-2 text-stone-900">{bonus.title}</h4>
                  <p className="text-stone-500 text-sm mb-4 flex-grow">{bonus.desc}</p>
                  <div className="pt-4 border-t border-stone-100">
                    <p className="text-xs text-stone-400 uppercase font-bold">Valor separado:</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-stone-400 line-through text-sm">{bonus.value}</span>
                      <span className="text-green-600 font-bold">GRÁTIS HOJE</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Target Audience */}
      <Section>
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100">
          <h2 className="font-serif text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <Heart className="text-brand-500 fill-current" />
            PRA QUEM É:
          </h2>
          <div className="space-y-4">
            {[
              "Para quem está cansada da fase “estranha”",
              "Para quem não quer raspar tudo por impulso",
              "Para quem quer parar de gastar com produto errado",
              "Para quem quer voltar a se sentir bonita",
              "Para quem quer assumir o cabelo natural com segurança"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-brand-50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-white shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="font-medium text-stone-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-gradient-to-b from-white to-brand-50">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">ESCOLHA SEU PLANO</h2>
          <p className="text-stone-600">Garanta acesso a tudo agora mesmo.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {/* Basic Plan */}
          <FadeIn>
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 text-stone-500 font-bold tracking-wider text-sm mb-4">
                <span className="p-1 bg-stone-100 rounded">🌿</span> PLANO BÁSICO
              </div>
              <div className="text-4xl font-bold text-stone-900 mb-2">R$ 10,00</div>
              <p className="text-stone-500 text-sm mb-8">Pagamento único</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-stone-700">
                  <Check size={18} className="text-brand-500" />
                  Apenas o Guia completo
                </li>
              </ul>
              
              <p className="text-sm text-stone-500 mb-6 text-center">Ideal para quem quer começar agora.</p>
              
              <Button primary={false} className="w-full" href="https://app.sellpay.com.br/checkout/d7ee0a3f-bf6d-4018-9a61-686af78f7b68/7d46d868-9225-46b9-9d65-4aa17dbc46d1">
                Quero o Básico
              </Button>
            </div>
          </FadeIn>

          {/* Complete Plan */}
          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-2xl border-2 border-brand-500 shadow-2xl relative transform md:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                MAIS VENDIDO
              </div>
              
              <div className="flex items-center gap-2 text-brand-600 font-bold tracking-wider text-sm mb-4">
                <span className="p-1 bg-brand-100 rounded">👑</span> PLANO COMPLETO
              </div>
              
              <div className="mb-6">
                <p className="text-stone-400 text-sm font-medium line-through mb-1">De R$ 297,90 por</p>
                <div className="text-5xl font-bold text-stone-900">R$ 19,90</div>
                <p className="text-green-600 text-sm font-bold mt-2 bg-green-50 inline-block px-2 py-1 rounded">
                  Economize R$ 278,00 hoje
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-stone-900 font-bold">
                  <Check size={18} className="text-brand-500" />
                  Guia Completo
                </li>
                {[
                  "Todos os bônus exclusivos",
                  "Grupo VIP",
                  "Lista de produtos",
                  "Planner app",
                  "Guia de penteados",
                  "Receitas de crescimento"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <Gift size={18} className="text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button className="w-full flex items-center justify-center gap-2" href="https://app.sellpay.com.br/checkout/d7ee0a3f-bf6d-4018-9a61-686af78f7b68/6f5f49a7-0621-4e76-af1f-bf1d779ffe55">
                Quero Acesso Completo <ArrowRight size={18} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Guarantee */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-900">
            <ShieldCheck size={40} />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-6">GARANTIA INCONDICIONAL</h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Você tem <strong className="text-stone-900">7 dias de garantia</strong>. 
            Se sentir que não é para você, basta pedir reembolso. 
            Sem perguntas. Sem constrangimento. O risco é todo nosso.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-stone-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-2">
            <AccordionItem 
              question="Funciona para qualquer tipo de cabelo?" 
              answer="Sim. O método ensina como adaptar para cada textura." 
            />
            <AccordionItem 
              question="Preciso cortar tudo?" 
              answer="Não. Você vai aprender a decidir o momento certo." 
            />
            <AccordionItem 
              question="É só para quem está começando?" 
              answer="Não. Serve para qualquer fase da transição." 
            />
            <AccordionItem 
              question="E se meu cabelo estiver muito danificado?" 
              answer="O cronograma foi pensado exatamente para isso." 
            />
            <AccordionItem 
              question="Vou precisar comprar muitos produtos?" 
              answer="Não. Inclusive você vai economizar evitando erros." 
            />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center text-sm">
        <p className="mb-4">© 2024 Transição Capilar Acelerada. Todos os direitos reservados.</p>
        <p>Este site não faz parte do site do Facebook ou Facebook Inc.</p>
      </footer>

    </div>
  );
}
