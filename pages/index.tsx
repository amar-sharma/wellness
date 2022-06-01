import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';
import { useRouter } from 'next/router';
import Dashboard from './dashboard';

const Home: NextPage = () => {
  const [session, setSession] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const newSesstion = supabase.auth.session();
    setSession(newSesstion);
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    if (!newSesstion) {
      router.push('/login');
    }
  }, [router]);

  if (session) return <Dashboard />;
  else {
    return <></>;
  }
};

export default Home;
