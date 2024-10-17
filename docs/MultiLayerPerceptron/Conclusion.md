# Summary

Multi-layer perceptrons are a type of artificial neural network that can learn complex patterns in data. They have been successfully applied to a wide range of problems, including image recognition, speech recognition, and natural language processing.

- Feedforward:

$$
a^{0} = x
$$

$$
z^{l} = W^{l} a^{l-1} + b^{l}, \quad l = 1, 2, \ldots, L
$$

$$
a^{l} = f(z^{l}), \quad l = 1, 2, \ldots, L
$$

$$
\hat{y} = a^{L}
$$

- Activation functions:
  - ReLU: $f(x) = \frac{1}{1 + e^{-x}}$
  - Sigmoid: $f(x) = \frac{1}{1 + e^{-x}}$
  - Tanh: $f(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$
  - Softmax: $f(x_i) = \frac{e^{x_i}}{\sum_{j} e^{x_j}}$

- Backpropagation:
  - Using Stochastic Gradient Descent to update weights and biases
  - Calculating gradients using the chain rule

# Conclusion

In summary, multi-layer perceptrons are powerful artificial neural networks adept at learning intricate data patterns. Their versatility has led to significant advancements in fields such as image and speech recognition, as well as natural language processing. The feedforward mechanism, coupled with various activation functions like ReLU, Sigmoid, Tanh, and Softmax, enables effective data processing. Moreover, the backpropagation algorithm, facilitated by stochastic gradient descent, optimizes the learning process through precise weight and bias adjustments. Continued exploration and refinement of these models hold immense potential for tackling increasingly complex challenges in artificial intelligence.