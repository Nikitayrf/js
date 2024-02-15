// Экспорт
// Чтобы получить доступ к объектам модулей, надо их экспортировать

export const name = 'square';  // Ключевое слово export

// Функция рисует квадрат
export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
};

// внутри блоков экспортировать нельзя
