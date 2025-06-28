# ReUsa - Plataforma de Reutilización Sostenible

Una plataforma colaborativa para intercambiar, donar, vender o comprar artículos infantiles de forma práctica y solidaria.

## 🎯 Plausible Analytics Tracking

El proyecto incluye un sistema de tracking personalizado para Plausible Analytics que permite identificar acciones específicas de los usuarios en el dashboard.

### Eventos de Botones en el Dashboard

#### Hero Section
- `hero_intercambiar_click` - Botón "Intercambiar"
- `hero_donar_click` - Botón "Donar" 
- `hero_vender_click` - Botón "Vender"
- `hero_comprar_click` - Botón "Comprar"
- `hero_quiero_donar_click` - Botón "Quiero Donar"
- `hero_saber_mas_click` - Botón "Saber Más"

#### Newsletter Section
- `newsletter_submit_click` - Botón "ÚNETE A REUSA"
- `newsletter_invitar_amigos_click` - Botón "Invitar a más amigos"
- `newsletter_compartir_redes_click` - Botón "Compartir en redes"
- `newsletter_saber_mas_plataforma_click` - Botón "Saber más"
- `newsletter_contacto_directo_click` - Botón "Contacto directo"

#### Footer Section
- `footer_social_facebook_click` - Botón Facebook
- `footer_social_tiktok_click` - Botón TikTok
- `footer_contact_email_click` - Contacto por email
- `footer_navigation_about_click` - Enlace "¿Qué es ReUsa?"
- `footer_navigation_how_it_works_click` - Enlace "Cómo funciona"
- `footer_navigation_impact_click` - Enlace "Nuestro impacto"
- `footer_navigation_join_click` - Enlace "Únete a ReUsa"

#### Analytics Dashboard
- `analytics_open_click` - Abrir dashboard
- `analytics_close_click` - Cerrar dashboard
- `analytics_clear_events_click` - Limpiar eventos
- `analytics_export_click` - Exportar datos

### Propiedades Adicionales

Cada evento incluye propiedades adicionales para mejor análisis:
- `action` - La acción específica realizada
- `section` - La sección donde ocurrió la acción
- `button_type` - El tipo de botón (main_action, secondary_action, etc.)
- `location` - La ubicación específica del botón

### Desarrollo

Para ver los eventos en desarrollo, abre la consola del navegador. Los eventos se muestran con el formato:
```
📊 Plausible Event: { eventName: "hero_intercambiar_click", props: { action: "intercambiar", section: "hero" } }
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📊 Analytics Dashboard

El proyecto incluye un dashboard de analytics en tiempo real que se puede abrir haciendo clic en el botón 📊 en la esquina inferior derecha.

## 🛠️ Tecnologías

- Next.js 14
- TypeScript
- Tailwind CSS
- Plausible Analytics
