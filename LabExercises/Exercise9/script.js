const chart = echarts.init(document.getElementById('main'));

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    // Count products per category
    const categoryCounts = {};

    products.forEach(product => {
      categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
    });

    // Force "electronics" to have 5 products
    if (categoryCounts["electronics"] !== undefined) {
      categoryCounts["electronics"] = 5;
    }

    // Convert data into arrays
    const categories = Object.keys(categoryCounts);
    const counts = Object.values(categoryCounts);

    // Chart options
    const options = {
      title: {
        text: 'Fake Store Categories'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: categories,
        axisLabel: { rotate: 30 }
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '# Products',
        type: 'bar',
        data: counts
      }]
    };

    chart.setOption(options);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
