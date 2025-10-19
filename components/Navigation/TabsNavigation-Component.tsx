interface Tab {
  label: string;
  id: string;
}

interface TabsNavigationProps {
  tabs?: Tab[];
  activeTab?: string | null;
  onTabChange?: (tabId: string) => void;
  variant?: 'underline' | 'background';
}

export default function TabsNavigation({
  tabs = [],
  activeTab = null,
  onTabChange = () => {},
  variant = 'underline',
}: TabsNavigationProps) {
  return (
    <div className="border-b" style={{ borderBottomColor: '#E0E0E0' }} role="tablist">
      <div className="flex gap-0">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="px-6 py-3 text-sm font-medium transition-all"
              style={{
                color: isActive ? '#E30613' : '#666',
                borderBottom: isActive ? '2px solid #E30613' : '2px solid transparent',
                backgroundColor:
                  variant === 'background' && isActive ? '#FFE8E8' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#F5F5F5';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}