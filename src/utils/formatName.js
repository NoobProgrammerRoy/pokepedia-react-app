export default function formatName(name) {
    return name[0].toUpperCase() + name.slice(1).replace('-', ' ');
}