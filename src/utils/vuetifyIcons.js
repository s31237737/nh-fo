import { h } from 'vue'

const modules = import.meta.glob('@/components/SvgIcon/*.vue', { eager: true })
const customIcons = {}

Object.entries(modules).forEach(([path, module]) => {
  const iconName = path.split('/').pop().replace('.vue', '').replace(/^Icon/, '').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  customIcons[iconName] = module.default;
})

const custom = {
  component: (props) => {
    const iconName = props.icon;
    const IconComponent = customIcons[iconName];

    if (!IconComponent) {
      console.error(`Icon component for "${iconName}" not found.`);
      return null;
    }

    return h(IconComponent);
  }
}

export { custom }
