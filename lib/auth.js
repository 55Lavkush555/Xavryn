// Mock authentication functions
// Replace these with real API calls when backend is ready

export async function loginUser(email, password) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock validation
  if (email === 'test@xavryn.com' && password === 'password123') {
    return {
      success: true,
      user: {
        id: '1',
        name: 'Test User',
        email: email,
        avatar: null,
      },
      token: 'mock-jwt-token',
    };
  }
  
  return {
    success: false,
    error: 'Invalid email or password',
  };
}

export async function registerUser(name, email, password) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock validation - check if email already exists
  if (email === 'test@xavryn.com') {
    return {
      success: false,
      error: 'Email already registered',
    };
  }
  
  return {
    success: true,
    user: {
      id: '2',
      name: name,
      email: email,
      avatar: null,
    },
    token: 'mock-jwt-token',
  };
}

export async function forgotPassword(email) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Always return success for demo
  return {
    success: true,
    message: 'Password reset link sent to your email',
  };
}

export async function updateProfile(data) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    user: {
      ...data,
    },
  };
}

export async function changePassword(currentPassword, newPassword) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (currentPassword === 'password123') {
    return {
      success: true,
      message: 'Password changed successfully',
    };
  }
  
  return {
    success: false,
    error: 'Current password is incorrect',
  };
}