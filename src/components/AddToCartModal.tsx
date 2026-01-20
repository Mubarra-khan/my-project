"use client"

import React from 'react';
import { X, ShoppingCart, Check } from 'lucide-react';

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: number;
  planDescription: string;
}

export const AddToCartModal: React.FC<AddToCartModalProps> = ({
  isOpen,
  onClose,
  planName,
  planPrice,
  planDescription,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Add to Cart</h3>
              <p className="text-sm text-white/70">Customize your order</p>
            </div>
          </div>

          {/* Plan details */}
          <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
            <h4 className="font-semibold text-white mb-2">{planName}</h4>
            <p className="text-sm text-white/80 mb-3">{planDescription}</p>
            {planPrice > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Price:</span>
                <span className="font-bold text-green-400">${planPrice}</span>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm text-white/80">Professional video editing</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm text-white/80">Custom thumbnail design</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm text-white/80">SEO optimization</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm text-white/80">24/7 support</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};