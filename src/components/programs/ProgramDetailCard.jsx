import React from 'react';

const ProgramDetailCard = ({ icon: Icon, title, catchphrase, desc, features, color }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col h-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center shrink-0`}>
          <Icon className="w-8 h-8 text-gray-800" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <span className="text-sm text-dream-blue font-bold">“{catchphrase}”</span>
        </div>
      </div>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{desc}</p>
      <div className="border-t border-gray-100 pt-5">
        <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-1.5">기대 효과</h4>
        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
          {features.map((feature, idx) => (
            <li key={idx} className="pl-1 leading-relaxed">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgramDetailCard;
