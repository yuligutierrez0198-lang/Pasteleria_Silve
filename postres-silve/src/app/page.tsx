"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";

const products = [
  {
    name: "Pastel de frutos rojos",
    detail: "Vainilla, crema suave y fruta fresca",
    price: 520,
    category: "Pasteles",
    label: "El favorito",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1100&q=85",
  },
  {
    name: "Cheesecake de temporada",
    detail: "Queso cremoso sobre base de galleta",
    price: 460,
    category: "Pasteles",
    label: "Nuevo",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1100&q=85",
  },
  {
    name: "Galletas de mantequilla",
    detail: "Horneadas lentamente, caja de 8",
    price: 180,
    category: "Galletas",
    label: "Para compartir",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1100&q=85",
  },
  {
    name: "Pavlova de limón",
    detail: "Merengue crujiente, crema y limón",
    price: 390,
    category: "Especiales",
    label: "Edición limitada",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1100&q=85",
  },
];

const categories = ["Todo", "Pasteles", "Galletas", "Especiales"];

function CakeMark() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path d="M10 36h28v6H10zM13 25h22v11H13zM8 19h32v6H8z" />
      <path d="M17 19c0-3 2-5 7-5s7 2 7 5M24 14V9m0 0c-2 0-3-1-3-3 2 0 3 1 3 3Zm0 0c2 0 3-1 3-3-2 0-3 1-3 3Z" />
      <path d="M18 30v2m6-2v2m6-2v2" />
    </svg>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const visibleProducts =
    activeCategory === "Todo"
      ? products
      : products.filter((product) => product.category === activeCategory);

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <>
      <div className="announcement">
        <span>Un pequeño antojo puede cambiarte el día</span>
        <a href="#productos">
          Descubre lo recién horneado <ArrowRight size={13} />
        </a>
      </div>

      <header className="site-header">
        <a aria-label="Postres Silve, inicio" className="brand" href="#inicio">
          <CakeMark />
          <span className="brand-name">
            POSTRES <strong>SILVE</strong>
          </span>
        </a>

        <nav aria-label="Navegación principal" className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#productos" onClick={() => setMenuOpen(false)}>Pasteles</a>
          <a href="#colecciones" onClick={() => setMenuOpen(false)}>Nuestras delicias</a>
          <a href="#historia" onClick={() => setMenuOpen(false)}>Nuestra historia</a>
        </nav>

        <div className="header-actions">
          <button
            aria-label="Abrir carrito"
            className="cart-button"
            onClick={() => setCartOpen(true)}
            type="button"
          >
            <ShoppingBag size={19} strokeWidth={1.6} />
            <span>Bolsa</span>
            <span className="cart-count">{cartItems.length}</span>
          </button>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Pastelería hecha con calma</p>
            <h1 id="hero-title">Un momento<br />para <em>saborear.</em></h1>
            <p className="hero-description">
              Recetas honestas, ingredientes de temporada y ese último bocado
              que siempre quieres guardar para después.
            </p>
            <a className="button button-dark" href="#productos">
              Encuentra tu favorito <ArrowRight size={16} />
            </a>
            <div className="hero-note">
              <span className="note-star">✳</span>
              <span>Hecho a mano.<br />Disfrutado sin prisa.</span>
            </div>
          </div>
          <div
            aria-label="Pastel artesanal decorado con frutos rojos"
            className="hero-image"
            role="img"
          >
            <div className="hero-image-caption">
              <span>01 / 03</span>
              <span>Momentos que saben a hogar</span>
            </div>
            <div className="hero-seal"><CakeMark /><span>POSTRES<br />SILVE</span></div>
          </div>
          <div className="hero-side-label">PASTELERÍA DE AUTOR · DESDE NUESTRA COCINA</div>
        </section>

        <section aria-labelledby="products-title" className="products-section section-wrap" id="productos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Un clásico, una sorpresa</p>
              <h2 id="products-title">Nuestras delicias <em>favoritas</em></h2>
            </div>
            <a className="text-link desktop-link" href="#colecciones">
              Ver toda la colección <ArrowUpRight size={16} />
            </a>
          </div>

          <div aria-label="Filtrar productos" className="filter-tabs" role="tablist">
            {categories.map((category) => (
              <button
                aria-selected={activeCategory === category}
                className={activeCategory === category ? "filter-tab active" : "filter-tab"}
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product" key={product.name}>
                <div
                  aria-label={product.name}
                  className="product-image"
                  role="img"
                  style={{ backgroundImage: `url("${product.image}")` }}
                >
                  <span className="product-label">{product.label}</span>
                  <button
                    aria-label={`Agregar ${product.name} a la bolsa`}
                    className="quick-add"
                    onClick={() => setCartItems([...cartItems, product.name])}
                    type="button"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <div className="product-info">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.detail}</p>
                  </div>
                  <span className="product-price">${product.price}</span>
                </div>
              </article>
            ))}
          </div>
          <a className="text-link mobile-link" href="#colecciones">
            Ver toda la colección <ArrowUpRight size={16} />
          </a>
        </section>

        <section aria-labelledby="collections-title" className="collections-section" id="colecciones">
          <div className="collections-intro">
            <p className="eyebrow">Elige tu momento</p>
            <h2 id="collections-title">¿Qué se te<br /><em>antoja hoy?</em></h2>
            <p>Algo para celebrar, regalar o simplemente disfrutar en casa.</p>
            <a className="text-link" href="#productos">Explorar productos <ArrowRight size={16} /></a>
          </div>
          <a className="collection-tile collection-cakes" href="#productos">
            <span className="collection-number">01</span>
            <span className="collection-name">Pasteles</span>
            <span className="collection-arrow"><ArrowUpRight size={18} /></span>
          </a>
          <a className="collection-tile collection-cookies" href="#productos">
            <span className="collection-number">02</span>
            <span className="collection-name">Galletas</span>
            <span className="collection-arrow"><ArrowUpRight size={18} /></span>
          </a>
          <a className="collection-tile collection-specials" href="#productos">
            <span className="collection-number">03</span>
            <span className="collection-name">Pequeños<br />especiales</span>
            <span className="collection-arrow"><ArrowUpRight size={18} /></span>
          </a>
        </section>

        <section aria-labelledby="story-title" className="story-section section-wrap" id="historia">
          <div className="story-image" role="img" aria-label="Una mesa de cocina con postres recién preparados">
            <span className="story-image-note">Un poco de harina,<br />mucho cariño.</span>
          </div>
          <div className="story-copy">
            <p className="eyebrow">Desde nuestra cocina</p>
            <h2 id="story-title">Lo bueno toma<br />su <em>tiempo.</em></h2>
            <p>
              En Postres Silve creemos que los mejores recuerdos suelen empezar
              alrededor de algo rico. Por eso mezclamos a mano, horneamos en
              pequeñas tandas y elegimos cada ingrediente con intención.
            </p>
            <p>
              No hace falta una gran ocasión. A veces, una rebanada compartida
              es todo lo que el día estaba esperando.
            </p>
            <a className="text-link" href="#newsletter">Conoce nuestra cocina <ArrowRight size={16} /></a>
            <div className="story-signature">Con cariño, <span>Silve</span></div>
          </div>
        </section>

        <section aria-labelledby="newsletter-title" className="newsletter" id="newsletter">
          <div className="newsletter-flower" aria-hidden="true">✳</div>
          <div className="newsletter-copy">
            <p className="eyebrow">Una nota dulce de vez en cuando</p>
            <h2 id="newsletter-title">Endulza tus <em>días.</em></h2>
            <p>Novedades de temporada y pequeños detalles directo a tu correo.</p>
          </div>
          <form className="newsletter-form" onSubmit={subscribe}>
            <label className="visually-hidden" htmlFor="email">Tu correo electrónico</label>
            <input autoComplete="email" id="email" name="email" placeholder="Tu correo electrónico" required type="email" />
            <button aria-label="Suscribirme al boletín" type="submit">
              {subscribed ? <Check size={19} /> : <ArrowRight size={19} />}
            </button>
            <span aria-live="polite" className="newsletter-status">
              {subscribed ? "¡Gracias! Ya estás en la lista." : ""}
            </span>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a aria-label="Postres Silve, inicio" className="brand footer-brand" href="#inicio">
          <CakeMark />
          <span className="brand-name">POSTRES <strong>SILVE</strong></span>
        </a>
        <p>Hecho con cariño, para compartir.</p>
        <div className="footer-links">
          <a href="#productos">Productos</a>
          <a href="#historia">Nosotros</a>
          <a href="#newsletter">Contacto</a>
        </div>
        <span className="copyright">© 2026 Postres Silve</span>
      </footer>

      {cartOpen && (
        <div className="cart-backdrop" onClick={() => setCartOpen(false)}>
          <aside
            aria-label="Tu bolsa de compras"
            aria-modal="true"
            className="cart-drawer"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="cart-heading">
              <div><p className="eyebrow">Un antojo delicioso</p><h2>Tu bolsa <span>({cartItems.length})</span></h2></div>
              <button aria-label="Cerrar bolsa" className="icon-button" onClick={() => setCartOpen(false)} type="button"><X size={21} /></button>
            </div>
            {cartItems.length > 0 ? (
              <>
                <ul className="cart-items">
                  {cartItems.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
                </ul>
                <button className="clear-cart" onClick={() => setCartItems([])} type="button"><Trash2 size={15} /> Vaciar bolsa</button>
                <a className="button button-dark cart-continue" href="#productos" onClick={() => setCartOpen(false)}>Seguir explorando <ArrowRight size={16} /></a>
              </>
            ) : (
              <div className="empty-cart">
                <ShoppingBag size={30} strokeWidth={1.3} />
                <p>Tu bolsa está esperando algo rico.</p>
                <button className="text-link" onClick={() => setCartOpen(false)} type="button">Descubrir postres <ArrowRight size={16} /></button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
