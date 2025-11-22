'use client';
import { useState } from 'react';
import Portal from './Portal';
import { useProducts } from '@/context/ProductContent';

export default function Products(props) {
  const { templates, icons } = props;
  const [portalImage, setPortalImage] = useState(null);
  const { handleIncrementProduct, cart } = useProducts();

  if (!templates.length || !icons.length) return null;

  return (
    <>
      {portalImage && (
        <Portal handleClosePortal={() => setPortalImage(null)}>
          <div className="portal-content">
            <img
              src={`/med_res/${portalImage}.jpeg`}
              alt={`${portalImage}-high-res`}
              className="img-display"
            />
          </div>
        </Portal>
      )}

      <div className="section-container">
        <div id="templates-section" className="section-header">
          <h2>Shop our templates</h2>
          <p>From organization or accessorization</p>
        </div>
        <div className="template-container">
          {templates.map((template, templateIndex) => {
            const templateName = template.name;
            const templateUrl = templateName
              .replaceAll(' Template', '')
              .replaceAll(' ', '_');
            return (
              <div key={templateIndex} className="template-card">
                <div>
                  <button
                    onClick={() => setPortalImage(templateUrl)}
                    className="img-button"
                  >
                    <img
                      src={`/low_res/${templateUrl}.png`}
                      alt={`${templateUrl}-low-res`}
                    />
                  </button>
                </div>
                <div className="template-info">
                  <p className="text-large">
                    {templateName} <span>PDF</span>
                  </p>

                  <h3>
                    <span>$</span>
                    {template.prices[0].unit_amount / 100}
                  </h3>
                  <p>{template.description}</p>

                  <button
                    onClick={() => {
                      const templatePriceId = template.prices[0].id;
                      handleIncrementProduct(templatePriceId, 1, template);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-container">
        <div id="icons-section" className="section-header">
          <h2>Or Collect Your Favorite Icons</h2>
          <p>Choose from our hand-drawn icons for projects</p>
        </div>
        <div className="icon-container">
          {icons.map((icon, iconIndex) => {
            const iconName = icon.name;
            const iconUrl = iconName
              .replaceAll(' Icon', '')
              .replaceAll(' ', '_');
            return (
              <div key={iconIndex} className="icon-card">
                <button
                  onClick={() => setPortalImage(iconUrl)}
                  className="img-button"
                >
                  <img
                    src={`/low_res/${iconUrl}.jpeg`}
                    alt={`${iconUrl}-low-res`}
                  />
                </button>
                <div className="icon-info">
                  <p className="text-medium">
                    {iconName} <span>PNG</span>
                  </p>
                  <p>{icon.description}</p>
                  <h4>
                    <span>$</span>
                    {icon.prices[0].unit_amount / 100}
                  </h4>
                  <button
                    onClick={() => {
                      const iconPriceId = icon.prices[0].id;
                      handleIncrementProduct(iconPriceId, 1, icon);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
