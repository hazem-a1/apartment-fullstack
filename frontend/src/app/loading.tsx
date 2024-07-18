import React from 'react';

export default async function LoadingFallback() {
  return (
          <svg width="200" height="100">
              <rect x="10" y="80" width="20" height="20" fill="red" id="bar1">
                  <animate attributeName="height" dur="2s" repeatCount="indefinite"
                      values="20; 60; 20"
                  />
                  <animate attributeName="y" dur="2s" repeatCount="indefinite"
                      values="80; 40; 80"
                  />
              </rect>
              <rect x="40" y="60" width="20" height="40" fill="green" id="bar2">
                  <animate attributeName="height" dur="2s" repeatCount="indefinite"
                      values="40; 20; 40"
                  />
                  <animate attributeName="y" dur="2s" repeatCount="indefinite"
                      values="60; 80; 60"
                  />
              </rect>
              <rect x="70" y="40" width="20" height="60" fill="blue" id="bar3">
                  <animate attributeName="height" dur="2s" repeatCount="indefinite"
                      values="60; 40; 60"
                  />
                  <animate attributeName="y" dur="2s" repeatCount="indefinite"
                      values="40; 60; 40"
                  />
              </rect>
          </svg>
  );
}