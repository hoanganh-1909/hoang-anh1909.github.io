            // Lấy tất cả các container và văn bản bên trong
            const containers = document.querySelectorAll('.language-container');
                    containers.forEach(container => {
                        const textElement = container.querySelector('.language-text');
                        const textWidth = textElement.offsetWidth;

                        // Đặt lại chiều dài của container dựa trên chiều dài của văn bản bên trong
                        container.style.width = `${textWidth + 60}px`; 
                    });

            const containers2 = document.querySelectorAll('.rectangle-container2');
            containers2.forEach(container => {
                const textElement = container.querySelector('.rectangle-text2');
                const textWidth = textElement.offsetWidth;

                // Đặt lại chiều dài của container dựa trên chiều dài của văn bản bên trong
                container.style.width = `${textWidth + 60}px`; 
            });

            // Hiệu ứng ở Languages
            document.querySelectorAll('.languages .item').forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.classList.add('hovered');
                });
                item.addEventListener('mouseleave', () => {
                    item.classList.remove('hovered');
                });
            });

            document.querySelectorAll('.languages .language-bar').forEach(bar => {
                bar.addEventListener('mouseenter', () => {
                    bar.classList.add('hovered');
                    const prevItem = bar.previousElementSibling;
                    if (prevItem && prevItem.classList.contains('item')) {
                        prevItem.classList.add('hovered');
                    }
                });
                bar.addEventListener('mouseleave', () => {
                    bar.classList.remove('hovered');
                    const prevItem = bar.previousElementSibling;
                    if (prevItem && prevItem.classList.contains('item')) {
                        prevItem.classList.remove('hovered');
                    }
                });
            });

            // Hiệu ứng ở Education
            document.querySelectorAll('.education-container').forEach(container => {
                container.addEventListener('mouseenter', () => {
                    container.classList.add('hovered');
                });
                container.addEventListener('mouseleave', () => {
                    container.classList.remove('hovered');
                });
            });
            
